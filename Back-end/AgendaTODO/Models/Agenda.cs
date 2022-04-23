using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AgendaTODO.Models
   

{
   
    public class Agenda
    {
        internal int numero;
        private object numero1;

        public object GetNumero()
        {
            return numero1;
        }

        public void SetNumero(object value)
        {
            numero1 = value;
        }

        [Range(1,1000, ErrorMessage = "O campo número deve ter no mínimo 1 e no máximo 1000")]
        public int Numero { get; set; }
        [Required (ErrorMessage = "O campo nome é obrigatório")]
        public string Nome { get; set; }
        

        internal void Add(Agenda agenda)
        {
            
        }
    }
}
