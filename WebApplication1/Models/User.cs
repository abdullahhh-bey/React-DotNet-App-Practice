using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [StringLength(30, ErrorMessage = "Invalid Name")]
        public string Name { get; set; } = String.Empty;

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; } = String.Empty;

        [Required]
        public string Course { get; set; } = String.Empty;
        public decimal Cgpa { get; set; } = 0;

    }
}