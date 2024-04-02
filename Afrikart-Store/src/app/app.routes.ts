import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Contact', component: ContactComponent },
    { path: 'Products', component: ProductsComponent},
    { path: 'Products', children:[
        {path: 'Cart', component: AddToCartComponent}
    ]},
    { path: 'Login', component: LoginComponent },
];
