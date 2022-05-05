using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TarefaAPI.Models
{
    
    public class Tarefa
    { 
        public int Id { get; set; }
        public string Name { get; set; }  
        public bool Marcar { get; set; }
    }
}
