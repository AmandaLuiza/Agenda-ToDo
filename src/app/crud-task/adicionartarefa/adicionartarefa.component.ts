import { Tarefa } from './../model/tarefa';
import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionartarefa',
  templateUrl: './adicionartarefa.component.html',
  styleUrls: ['./adicionartarefa.component.scss']
})
export class AdicionartarefaComponent implements OnInit {


inputVazio: boolean = false;


  tarefa: Tarefa = {
    name: "",
    marcar: false
  };

  constructor(private service: CrudService) {}

  ngOnInit(): void {}



  Adicionartarefa(): void {

    if (this.tarefa.name == '') {
      this.inputVazio= true;
      return;
    }




    this.service.adicionarTarefa(this.tarefa).subscribe(() => {
     location.reload();
    });

    this.limparInput();

  }


  pressionar(){
    this.inputVazio= false;

  }

 limparInput() {
    this.tarefa.name = '';

  }

}
