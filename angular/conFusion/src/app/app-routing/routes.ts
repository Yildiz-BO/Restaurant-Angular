import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DishDetailsComponent } from '../dish-details/dish-details.component';
import { MenuComponent } from '../menu/menu.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'menu', component: MenuComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'contactus',     component: ContactComponent }

]