import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }

  myObj:Object = {
    key1: 'Hola',
    key2: 'Que tal?',
    key3: 'Bien'
  }
  myObj2:Object = {
    key1: 'Hola',
    key2: 'Que tal?',
    key3: 'Bien'
  }
}
