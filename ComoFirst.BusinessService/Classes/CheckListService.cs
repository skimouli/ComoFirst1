using AutoMapper;
using ComoFirst.BusinessService.Interfaces;
using ComoFirst.Model;
using ComoFirst.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections;

namespace ComoFirst.BusinessService.Classes
{
    public class CheckListService : ICheckListService
    {
        private readonly IMapper _mapper;
        private readonly DbContextComofirst _context;
        private readonly ITachesService _tachesService;
        private readonly ICheckListTachesService _checkListTachesService;
        public CheckListService(IMapper mapper,
                                DbContextComofirst context,
                                ITachesService tachesService,
                                ICheckListTachesService checkListTachesService)
        {
            _context = context;
            _mapper = mapper;
            _tachesService = tachesService;
            _checkListTachesService = checkListTachesService;

        }
        public IEnumerable<CheckListViewModel> GetAll()
        {
            
            var checkList = _context.CheckList.Include(x => x.CheckListTaches).ThenInclude(x => x.IdTachesNavigation).ToList()

                .Select(x =>
            {
                IList<Taches> listTaches = new List<Taches>();
                x.CheckListTaches.ToList().ForEach(x => listTaches.Add(x.IdTachesNavigation));
                CheckListViewModel retour = new CheckListViewModel
                {
                    Id = x.Id,
                    NomCheckList = x.NomCheckList,
                    Taches = _mapper.Map<IList<TachesViewModel>>(listTaches)
                };
                return retour;
            });
            return checkList;
        }

        public CheckListViewModel AddCheckList(CheckListViewModel checkListViewModel)
        {
            var checklist = new CheckList
            {
                NomCheckList = checkListViewModel.NomCheckList
            };
            var retour = _context.CheckList.Add(checklist).Entity;
            _context.SaveChanges();
            _tachesService.AddTaches(checkListViewModel, checklist.Id);
            return _mapper.Map<CheckListViewModel>(retour);
        }

        public void DeleteCheckList(int idCheckList, List<int> idsTaches)
        {

            _checkListTachesService.DeleteCheckListTaches(idCheckList, idsTaches);
            _tachesService.DeleteTaches(idsTaches);
            var checkListSupprimee = _context.CheckList.Find(idCheckList);
            if(checkListSupprimee != null)
            {
                _context.CheckList.Remove(checkListSupprimee);
                _context.SaveChanges();
            }
        }

    }
}
