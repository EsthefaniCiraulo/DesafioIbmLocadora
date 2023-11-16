import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

const carroModule = () => import('./pages/carro/carro.module').then(x => x.CarroModule);
const reservaModule = () => import('./pages/reserva/reserva.module').then(x => x.ReservaModule);

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "home", component: HomeComponent },
    { path: "carro", loadChildren: carroModule },
    { path: "reserva", loadChildren: reservaModule }
];
