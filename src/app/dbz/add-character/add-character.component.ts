import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

  @Input()
  new: Character = {
    name: '',
    power: 0
  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // addCharacter() {
  //   if (!this.new.name.trim()) {
  //     console.log('Falta el nombre');
  //     return;
  //   }

  //   this.onNewCharacter.emit(this.new);

  //   this.new = {
  //     name: '',
  //     power: 0
  //   }

  // }

  constructor(private dbService: DbzService) {}

  addCharacter():void {
    if (!this.new.name.trim()) {
      console.error('Nombre vacío');
      return;
    }

    this.dbService.addCharacter(this.new);
    console.log('Works!!');

    this.new = {
      name: '',
      power: 0
    }
  }
}
