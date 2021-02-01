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
    public class TachesController : Controller
    {
        public readonly ITachesService _tachesService;
        public TachesController(ITachesService tachesService)
        {
            _tachesService = tachesService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TachesViewModel>> Get()
        {
            return Ok(_tachesService.GetAll());
        }

        [HttpPut]
        public void UpdateTache(TachesViewModel tachesViewModel)
        {
            _tachesService.UpdateTache(tachesViewModel);
        }

        [HttpPost("{idCheckList}")]
        public ActionResult<TachesViewModel> AddTache([FromBody] TachesViewModel tachesViewModel, int idCheckList)
        {
            return Ok(_tachesService.AddTache(tachesViewModel, idCheckList));
        }

        [HttpDelete("{idCheckList}/{idTache}")]
        public void DeleteTache(int idCheckList, int idTache)
        {
            _tachesService.DeleteTache(idCheckList, idTache);
        }
        [HttpPut("{idTache}")]
        public void UpdateTacheText(int idTache, string nouveauText)
        {
            _tachesService.UpdateTacheText(idTache, nouveauText);
        }
    }
}
