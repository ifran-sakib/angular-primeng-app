import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductLazyLoadListComponent } from './components/product-lazy-load-list/product-lazy-load-list.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { OrderMaserComponent } from './components/order-maser/order-maser.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[authGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'product-list',
    component: ProductLazyLoadListComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'order-maser',
    component: OrderMaserComponent
  },
  {
    path: 'play-ground',
    component: PlayGroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
