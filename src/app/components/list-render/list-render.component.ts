import { Component } from '@angular/core';

import { Animal } from 'src/app/interface/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: "Zuca", type: 'Dog', age: 4},
    {name: "Marley", type: 'Dog', age: 12},
    {name: "Nico", type: 'Cat', age: 18},
    {name: "Estampa", type: 'Horse', age: 12},
  ]

  animalDetails: string = '';

  showAge(animal: Animal): void {
    alert(`O animal tem: ${animal.age} anos`);
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
