using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.DTO
{
    public class UpdateUsersDTO
    {
        public string Name { get; set; } = String.Empty;

        public string Email { get; set; } = String.Empty;

        public string Course { get; set; } = String.Empty;

        public decimal Cgpa { get; set; }
    }
}