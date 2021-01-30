using System;
using System.Collections.Generic;
using System.Text;

namespace ComoFirst.BusinessService.Interfaces
{
    public interface ICheckListTachesService
    {
        void AddCheckListTaches(int idCheckList, List<int> idsTaches);
        void DeleteCheckListTache(int idCheckList, int idTache);
        void DeleteCheckListTaches(int idCheckList, List<int> idsTaches);
    }
}
