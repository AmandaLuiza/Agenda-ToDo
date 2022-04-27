import { ElementDialogComponent } from './../../shared/element-dialog/element-dialog.component';
import { _Schedule } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

export interface Element {
  name: string;
  position: number;

}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Acordar'},
  {position: 2, name: 'Estudar'},
  {position: 3, name: 'Ler'},
  {position: 4, name: 'Desenhar'},
  {position: 5, name: 'Ir a academia'},
  {position: 6, name: 'Anotar um recado'},
  {position: 7, name: 'Assistir filme'},
  {position: 8, name: 'Conversar'},
  {position: 9, name: 'Tocar algum instrumento'},
  {position: 10, name: 'Descansar'},
];






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position','name','actions'];
  dataSource = ELEMENT_DATA;
  change_color: boolean = false;


  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(element: Element | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        position: null,
        name: '',
      }: {
        position: element.position,
        name: element.name,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if(this.dataSource.map(p => p.position).includes(result.position)) {
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();

        }
      }
    });

  }

  editElement(element: Element): void {
    this.openDialog(element);

  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position );

  }
  onClick(){
    console.log("Clicou")
  }
}

