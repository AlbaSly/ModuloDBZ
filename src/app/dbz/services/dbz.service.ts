import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
  private _characters:Character[] = [
    {
      name: 'Vegetta',
      power: 9000
    },
    {
      name: 'Goku',
      power: 19000
    }
  ];

  get characters():Character[] {
    return [...this._characters]
  }

  constructor() {}

  addCharacter(character: Character):void {
    this._characters.push(character);
  }
}
