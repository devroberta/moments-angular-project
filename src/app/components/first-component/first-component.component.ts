import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = "Roberta";
  age: number = 40;
  job: string = "Developer";

  pessoa = {
    nome: this.name,
    idade: this.age,
    prof: this.job
  }

}
