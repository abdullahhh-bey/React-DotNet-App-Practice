using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.DTO;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserinfoController : ControllerBase
    {

        //This is the DbConext Injection
        private readonly UserAppDbContext _dbContext;

        //This is the Aauto Mapper Injection
        private readonly IMapper _mapper;

        public UserinfoController(UserAppDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        //Actions/Endpoints

        //Get Method
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _dbContext.Users.ToListAsync();
            if (users.Count == 0)
            {
                return NotFound("No Users!");
            }
            var userDto = _mapper.Map<List<UsersInfoDTO>>(users);
            return Ok(userDto);
        }


        //Get by Id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            if (id == 0)
            {
                return BadRequest("0 can't be an ID");
            }

            var user = await _dbContext.Users.FindAsync(id);
            if (user is null)
            {
                return NotFound("No User Found");
            }
            var userDto = _mapper.Map<UsersInfoDTO>(user);
            return Ok(userDto);
        }



        //Post Method
        [HttpPost]
        public async Task<IActionResult> AddNewUser([FromBody] AddUsersDTO user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Incomplete Information");
            }

            var doesExist = await _dbContext.Users.AnyAsync(x => x.Email == user.Email);
            if (doesExist)
            {
                return BadRequest("Email Already Registered");
            }

            var userEntity = _mapper.Map<User>(user);
            await _dbContext.Users.AddAsync(userEntity);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction("GetUserById", new { Id = userEntity.Id }, user);
        }




        //Put Method
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UpdateUsersDTO user)
        {
            if (id != user.Id)
            {
                return BadRequest("Id Mismatched!");
            }

            var u = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (u is null)
            {
                return NotFound("No User");
            }

            var doesExist = await _dbContext.Users.AnyAsync(x => x.Email == user.Email);
            if (doesExist)
            {
                return BadRequest("Email Already Registered");
            }

            _mapper.Map(user, u);
            await _dbContext.SaveChangesAsync();
            return Ok(u);
        }



        //Delete a User
        [HttpDelete("{email}")]
        public async Task<IActionResult> DeleteUser(string email)
        {
            var user = _dbContext.Users.FirstOrDefault(u => u.Email == email);
            if (user is null)
            {
                return NotFound("No User.");
            }
            _dbContext.Users.Remove(user);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }


        //Get User with Course ( filter )
        [HttpGet("by-course")]
        public async Task<IActionResult> GetUsersInCourse([FromQuery] string course)
        {
            if (course.Length == 0)
            {
                return BadRequest("Enter Valid Course");
            }

            var user = await _dbContext.Users
            .Where(u => u.Course == course)
            .OrderByDescending(u => u.Cgpa)
            .ToListAsync();

            if (user.Count == 0)
            {
                return NotFound($"No User in {course.ToUpper()}");
            }

            var userDto = _mapper.Map<UsersInfoDTO>(user);
            return Ok(userDto);
        }


        //Get User with email ( filter )
        [HttpGet("by-email")]
        public async Task<IActionResult> GetUsersByEmail([FromQuery] string email)
        {
            if (email.Length == 0)
            {
                return BadRequest("Enter Valid Email");
            }

            var user = await _dbContext.Users
            .Where(u => u.Email == email)
            .ToListAsync();

            if (user.Count == 0)
            {
                return NotFound($"No User in {email}");
            }

            var userDto = _mapper.Map<UsersInfoDTO>(user);
            return Ok(userDto);
        }


        //Get only Courses
        //I made this so that i can makje list of it ( options ) for users to select the course and get the student 
        [HttpGet("courses")]
        public async Task<IActionResult> GetCourse()
        {
            var courses = await _dbContext.Users
            .Select(c => c.Course)
            .Distinct()
            .ToListAsync();
            if (courses.Count == 0)
            {
                return NotFound("No Courses");
            }
            return Ok(courses);
        }

    }
}