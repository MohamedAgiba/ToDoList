import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Todo } from './Components/todo/todo';
import { TodoDetails } from './Components/todo-details/todo-details';
import { Contactus } from './Components/contactus/contactus';
import { AboutUs } from './Components/about-us/about-us';
import { NotFound } from './Components/not-found/not-found';

export const routes: Routes = [
    {path:"", redirectTo:'/todo', pathMatch:'full'},
    {path:'home', component:Home, title:'Home'},
    {path:'aboutus', component:AboutUs, title:'AboutUs'},
    {path:'todo', component:Todo, title:'Todo'},
    {path:'todo/:id', component:TodoDetails, title:'Todo Details'},
    {path:'contactUs', component:Contactus, title:'ContactUs'},
    {path:'**', component:NotFound, title:'Not Found'},
];
