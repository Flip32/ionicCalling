import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = [
    {
      name: 'Filipe',
      phone: 61984889669
    },
    {
      name: 'Natam',
      phone: 61999268787
    },
    {
      name: 'Vitor',
      phone: 6184595417
    }
  ]

  constructor(private callNumber: CallNumber) {}


  call(phone) {
    this.callNumber.callNumber(phone, true)
        .then(res => console.log('Ligação feita.', res))
        .catch(err => console.log('Erro ao fazer ligação.', err))
  }

}
