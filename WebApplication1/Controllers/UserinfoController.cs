using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserinfoController : ControllerBase
    {

        //This is the DbConext Injection
        private readonly DbContext _dbContext;

        //This is the Aauto Mapper Injection
        private readonly IMapper _mapper;

        public UserinfoController(DbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }


        //Actions/Endpoints
        


    }
}