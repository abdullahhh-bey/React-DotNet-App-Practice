using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.DTO
{
    public class UsersInfoDTO
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? Course { get; set; }

        public decimal Cgpa { get; set; }

    }
}