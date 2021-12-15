import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
public langugeEvent =new EventEmitter<boolean>();
  constructor() { }
}
