import { Tarefa } from './../model/tarefa';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizartarefa',
  templateUrl: './atualizartarefa.component.html',
  styleUrls: ['./atualizartarefa.component.scss']
})
export class AtualizartarefaComponent implements OnInit {

  tarefa: Tarefa = {
    name:''
  };

  constructor(
    private service: CrudService,
    private router: Router,
    private id: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const pegarId = this.id.snapshot.paramMap.get('id');
    this.service.lerPorId(String(pegarId)).subscribe((t) => {
      this.tarefa = t;
    });
  }

  atualizar(): void {
    if(this.tarefa.name == ''){
      return;
    }

    this.service.atualizarTarefa(this.tarefa).subscribe(() => {
      this.cancel();
    
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }
}
