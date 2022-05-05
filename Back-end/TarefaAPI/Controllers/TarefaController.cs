using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TarefaAPI.Data;
using TarefaAPI.Data.Dtos;
using TarefaAPI.Models;

namespace TarefaAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
         
          private TarefaContext _context;

        public TarefaController(TarefaContext context)
        {
            _context = context;
        }
        

        [HttpPost]
        public IActionResult AdicionaTarefa([FromBody] CreateTarefaDto tarefaDto)
        {
            Tarefa tarefa = new Tarefa
            {
                Id = tarefaDto.Id,
                Name = tarefaDto.Name,
                Marcar = tarefaDto.Marcar,
            };

            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return CreatedAtAction(nameof(RecuperaTarefasPorId), new { Id = tarefa.Id }, tarefa);
        }
        [HttpGet]
        public IEnumerable<Tarefa> RecuperarTarefas()
        {
            return _context.Tarefas;
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaTarefasPorId(int id)
        {
            Tarefa tarefa = _context.Tarefas.FirstOrDefault(t => t.Id == id);
            if(tarefa != null)
            {
                ReadTarefaDto tarefaDto = new ReadTarefaDto
                {
                    Id = tarefa.Id,
                    Name = tarefa.Name,
                    Marcar = tarefa.Marcar
                };
                return Ok(tarefaDto);
            }
            return NotFound(tarefa);

        }

        [HttpPut("{id}")]
        public IActionResult AtualizaTarefa(int id, [FromBody] UpdateTarefaDto tarefaDto)
        {
            Tarefa tarefa = _context.Tarefas.FirstOrDefault(tarefa => tarefa.Id == id);
            if(tarefa  == null)
            {
                return NotFound();
            }
          
            tarefa.Name = tarefaDto.Name;
            tarefa.Marcar = tarefaDto.Marcar;
            _context.SaveChanges();
            return NoContent();
            }

        [HttpDelete("{id}")]
        public IActionResult DeletaTarefa(int id)
        {
            Tarefa tarefa = _context.Tarefas.FirstOrDefault(tarefa => tarefa.Id == id);
            if (tarefa == null)
            {
                return NotFound();
            }
            _context.Remove(tarefa);
            _context.SaveChanges();
            return NoContent();

        }
    }
}
