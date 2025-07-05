import { Component } from '@angular/core';
import { Service } from '../service/service';
import { About } from '../about/about';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Service,About, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
