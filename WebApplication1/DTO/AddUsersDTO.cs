using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.DTO
{
    public class AddUsersDTO
    {
        [Required]
        [StringLength(30, ErrorMessage = "Invalid Name")]
        public string Name { get; set; } = String.Empty;

        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email")]
        public string Email { get; set; } = String.Empty;

        [Required]
        public string Course { get; set; } = String.Empty;

        [Range(0.0, 4.0, ErrorMessage = "Invlaid CGPA")]
        public decimal Cgpa { get; set; }
    }
}