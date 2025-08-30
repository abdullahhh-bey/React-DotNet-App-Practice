using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;
using AutoMapper;
using WebApplication1.DTO;

namespace WebApplication1.Mapping
{
    public class UsersAutoValidationMapper : Profile
    {
        public UsersAutoValidationMapper()
        {

            //Creating Auto Mapping from DTO's to Entity and vice versa 
            CreateMap<User, UsersInfoDTO>(); //entity to DTO -> GET
            CreateMap<UpdateUsersDTO, User>();
            CreateMap<User, UpdateUsersDTO>();
            CreateMap<AddUsersDTO, User>(); //Dto to entity -> POST
        }
    }

}