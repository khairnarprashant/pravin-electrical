import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Service } from './service/service';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [

      { path: '', component:  Home},
      {path: 'navbar', component: Navbar},
      {path: 'footer', component: Footer},
      {path: 'service', component: Service},
      {path: 'about', component: About},
      {path: 'contact', component: Contact}

];
