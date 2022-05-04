import { CrudService } from './../crud.service';
import { Tarefa } from './../model/tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ver-tarefas',
  templateUrl: './lertarefa.component.html',
  styleUrls: ['./lertarefa.component.scss']
})
export class vertarefasComponent implements OnInit {

  tarefa: Tarefa;
 listaTarefas: Tarefa[] = [];

  constructor(private service: CrudService) {
    this.tarefa = {
      id:0,
      name: "",
      marcar: false
    };
  }

  ngOnInit(): void {
    this.service.ler().subscribe((task: Tarefa[]) => {
      this.listaTarefas = task;
    });
  }

deletarTarefa(id: number): void {
    const deletarTarefa = window.confirm(`Deletar Tarefa`);

    if (!deletarTarefa) {
      return;
    }

    this.service.deletarTarefa((this.tarefa.id = id)).subscribe(() => {
      location.reload();
    });
  }

 marcarTarefa(marcar: boolean, id: number) {
  this.listaTarefas.forEach((x) => {
      if (id == x.id) {
        let mark = (x.marcar = !marcar);
        let idMarca = id;
        let nameMarca= x.name;

        this.tarefa = {
          id: idMarca,
          name: nameMarca,
          marcar: mark
        };

        this.service.atualizarTarefa(this.tarefa).subscribe(() => {
           console.log(this.tarefa)
        });
      }
    });
  }
}
