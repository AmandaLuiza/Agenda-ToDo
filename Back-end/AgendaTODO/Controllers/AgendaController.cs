using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgendaTODO.Models;
using Microsoft.AspNetCore.Mvc;

namespace AgendaTODO.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AgendaController : ControllerBase
    {
        private static List<Agenda> agenda = new List<Agenda>();
        

        [HttpPost]
        public void AdicionaAgenda([FromBody] Agenda agenda)
        {

            agenda.Add(agenda);

        }

        [HttpGet()]
        public IEnumerable<Agenda> RecuperarAgenda()
        {
            return agenda;
        }

        [HttpPut()]
        public IActionResult AtualizaAgenda(int numero, [FromBody] Agenda agenda)
       
        {
            return NotFound();
        }

        [HttpDelete()]
        public IActionResult DeletaAgenda(int numero)
        {
            return NotFound();
        }
        
    }
} 
    




