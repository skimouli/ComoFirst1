﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComoFirst.Model
{
    public partial class CheckList
    {
        public CheckList()
        {
            CheckListTaches = new HashSet<CheckListTaches>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(15)]
        public string NomCheckList { get; set; }

        [InverseProperty("IdCheckListNavigation")]
        public virtual ICollection<CheckListTaches> CheckListTaches { get; set; }
    }
}