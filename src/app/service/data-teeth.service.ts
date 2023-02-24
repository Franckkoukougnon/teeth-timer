import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataTeethService {
  validData(): string {
    throw new Error('Method not implemented.');
  }
  nom: string = '';
  temps: number = 0;

  constructor() {}

  getTemps(): number {
    return this.temps;
  }
  setTemps(temps: number) {
    this.temps = temps;
  }

  setNom(nom: string) {
    this.nom = nom;
  }

  getNom() {
    return this.nom;
  }

  formSave(formulaire: FormGroup) {}
}
