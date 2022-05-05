using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TarefaAPI.Models;

namespace TarefaAPI.Data
{
    public class TarefaContext : DbContext
    {
        public TarefaContext(DbContextOptions<TarefaContext> opt) : base(opt)
        {

        }

        public DbSet<Tarefa> Tarefas { get; set; }
        
            
    }
}
