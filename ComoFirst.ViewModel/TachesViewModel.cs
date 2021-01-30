using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ComoFirst.ViewModel
{
   public class TachesViewModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(200)]
        public string Text { get; set; }
        public bool Active { get; set; }
        [Required]
        [StringLength(15)]
        public string LoginUtilisateur { get; set; }
    }
}
