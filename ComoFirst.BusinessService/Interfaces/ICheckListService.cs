using ComoFirst.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace ComoFirst.BusinessService.Interfaces
{
    public interface ICheckListService
    {
        IEnumerable<CheckListViewModel> GetAll();
        CheckListViewModel AddCheckList(CheckListViewModel checkListViewModel);
        void DeleteCheckList(int idCheckList, List<int> idsTaches);
    }
}
