import { Component } from '@angular/core';
import { Service } from '../service/service';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Service,About, Contact,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
