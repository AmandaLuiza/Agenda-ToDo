using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TarefaAPI.Data.Dtos
{
    public class UpdateTarefaDto
    {  
        public int Id { get; set; }
        public string Name { get; set; }

        public bool Marcar { get; set; }
    }
}

