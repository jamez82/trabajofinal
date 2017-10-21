import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'crear clientes sisne';
  
  msg:string = '';

  employees = [
    {'name': 'john londoño', position: 'programador', email:'jamezlom@email.com'},
    {'name': 'lina', position: 'diseñador', email:'linitacdt@email.com'},
    {'name': 'juan', position: 'bases datos', email:'suarez@email.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    this.msg = ' Agregado Correctamente';
  }

  deleteEmployee(i):void {
    var answer = confirm('Quieres eliminarlo?');
    if(answer) {
      this.employees.splice(i, 1);
      this.msg = 'Eliminado Correctamente';
    }
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Actualizado Sactisfactoriamente';
        this.model2 = {};
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }

}
