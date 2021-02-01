using ComoFirst.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace ComoFirst.BusinessService.Interfaces
{
    public interface ITachesService
    {
        IEnumerable<TachesViewModel> GetAll();
        void AddTaches(CheckListViewModel checkListViewModel, int idCheckList);
        void UpdateTache(TachesViewModel tachesViewModel);
        TachesViewModel AddTache(TachesViewModel tachesViewModel, int idCheckList);
        void DeleteTache(int idCheckList, int idTache);
        void DeleteTaches(List<int> idsTaches);
        void UpdateTacheText(int idTache, string nouveauText);
    }
}
