using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserinfoController : ControllerBase
    {

        //This is the DbConext Injection
        private DbContext _dbContext;
        public UserinfoController(DbContext dbContext)
        {
            _dbContext = dbContext;
        }


        //Actions/Endpoints



    }
}