using ComoFirst.BusinessService.Interfaces;
using ComoFirst.Model;
using ComoFirst.ViewModel;
using System.Linq;
using AutoMapper;
using System.Collections;
using System.Collections.Generic;

namespace ComoFirst.BusinessService
{
    public class TachesService : ITachesService
    {
        private readonly IMapper _mapper;
        private readonly DbContextComofirst _context;
        private readonly ICheckListTachesService _checkListTachesService;
        public TachesService(DbContextComofirst context,
                             IMapper mapper,
                             ICheckListTachesService checkListTachesService)
        {
            _context = context;
            _mapper = mapper;
            _checkListTachesService = checkListTachesService;
        }

        public IEnumerable<TachesViewModel> GetAll()
        {
            return _mapper.Map<IEnumerable<TachesViewModel>>(_context.Taches).ToList();
        }

        public void AddTaches(CheckListViewModel checkListViewModel, int idCheckList)
        {
            var listIdTache = new List<int>();
            checkListViewModel.Taches.ToList().ForEach(x =>
            {
                var tacheAjoutée = _context.Taches.Add(_mapper.Map<Taches>(x)).Entity;
                _context.SaveChanges();
                listIdTache.Add(tacheAjoutée.Id);
            });
            _checkListTachesService.AddCheckListTaches(idCheckList, listIdTache);

        }

        public void UpdateTache(TachesViewModel tachesViewModel)
        {
            _context.Taches.Update(_mapper.Map<Taches>(tachesViewModel));
            _context.SaveChanges();
        }

        public TachesViewModel AddTache(TachesViewModel tachesViewModel, int idCheckList)
        {
            var idsTache = new List<int>();
            var tacheAjoutée = _context.Add(_mapper.Map<Taches>(tachesViewModel)).Entity;
            _context.SaveChanges();
            idsTache.Add(tacheAjoutée.Id);
            _checkListTachesService.AddCheckListTaches(idCheckList, idsTache);
            return _mapper.Map<TachesViewModel>(tacheAjoutée);

        }

        public void DeleteTache(int idCheckList, int idTache)
        {
            _checkListTachesService.DeleteCheckListTache(idCheckList, idTache);
            var tacheSuprimee = _context.Taches.Find(idTache);
            if(tacheSuprimee != null)
            {
                _context.Remove(tacheSuprimee);
                _context.SaveChanges();
            }
            
        }

        public void DeleteTaches(List<int> idsTaches)
        {
            foreach (var id in idsTaches)
            {
                var tacheSup = _context.Taches.Find(id);
                if (tacheSup != null)
                {
                    _context.Taches.Remove(tacheSup);
                }
            }
            _context.SaveChanges();
        }

    }
}
