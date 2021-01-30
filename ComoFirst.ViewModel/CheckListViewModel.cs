using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ComoFirst.ViewModel
{
    public class CheckListViewModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(15)]
        public string NomCheckList { get; set; }

        public IList<TachesViewModel> Taches { get; set; }
    }
}
