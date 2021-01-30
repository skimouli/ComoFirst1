using ComoFirst.BusinessService.Interfaces;
using ComoFirst.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComoFirst.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheckListControler : Controller
    {
        public readonly ICheckListService _checkListService;
        public CheckListControler(ICheckListService checkListService)
        {
            _checkListService = checkListService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CheckListViewModel>> Get()
        {
            return Ok(_checkListService.GetAll());
        }

        [HttpPost]
        public ActionResult AddCheckList(CheckListViewModel checkListViewModel)
        {
            return Ok(_checkListService.AddCheckList(checkListViewModel));
        }

        [HttpDelete("{idCheckList}")]
        public void Delete(int idCheckList, [FromBody]List<int>idsTaches)
        {
            _checkListService.DeleteCheckList(idCheckList, idsTaches);
        }

       
    }
}
