using AutoMapper;
using ComoFirst.BusinessService.Interfaces;
using ComoFirst.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ComoFirst.BusinessService.Classes
{

    public class CheckListTachesService : ICheckListTachesService
    {
        private readonly DbContextComofirst _context;
        private readonly IMapper _mapper;
        public CheckListTachesService(DbContextComofirst context,
                                      IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void AddCheckListTaches(int idCheckList, List<int> idsTaches)
        {
            foreach (var item in idsTaches)
            {
                var checkListTache = new CheckListTaches
                {
                    IdCheckList = idCheckList,
                    IdTaches = item
                };
                _context.CheckListTaches.Add(checkListTache);
                _context.SaveChanges();
            }
        }

        public void DeleteCheckListTache(int idCheckList, int idTache)
        {
            var checkListTacheSupprimee = _context.CheckListTaches.Find(idCheckList, idTache);
            if (checkListTacheSupprimee != null)
            {
                _context.CheckListTaches.Remove(checkListTacheSupprimee);
                _context.SaveChanges();
            }
        }

        public void DeleteCheckListTaches(int idCheckList, List<int> idsTaches)
        {
            foreach (var idTache in idsTaches)
            {
                var checkListSuprimee = _context.CheckListTaches.Find(idCheckList, idTache);
                if (checkListSuprimee != null)
                {
                    _context.Remove(checkListSuprimee);
                    
                   // _tachesService.DeleteTache(idCheckList, idTache);
                }
            }
            _context.SaveChanges();
        }



    }
}
