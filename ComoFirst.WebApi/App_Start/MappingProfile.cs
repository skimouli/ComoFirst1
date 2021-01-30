using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ComoFirst.Model;
using ComoFirst.ViewModel;

namespace ComoFirst.WebApi.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Taches, TachesViewModel>().ReverseMap();
            CreateMap<CheckList, CheckListViewModel>().ReverseMap();
        }
    }
}
