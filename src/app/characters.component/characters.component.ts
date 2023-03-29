import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CharacterService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.scss'],
})
export class CharactersComponent {
  personList: string[];
  enteredPersonName = '';
  private personListSubs: Subscription;
  isFetching = false;

  constructor(private prsService: CharacterService) {
    this.personList = prsService.persons;
  }

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
  }

  onFetchList() {
    this.personListSubs = this.prsService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
        this.isFetching = false;
      }
    );
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Input!';
    alert.message = 'Please enter a valid name.';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  }

  onCreatePerson() {
    if (this.enteredPersonName.length > 0) {
      this.prsService.addPerson(this.enteredPersonName);
      this.enteredPersonName = '';
    } else {
      this.presentAlert();
    }
  }
}
