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
import { AddEditOrderMasterComponent } from './components/order-maser/add-edit-order-master/add-edit-order-master.component';
import { TableFilterMenuDemoComponent } from './components/table-filter-menu-demo/table-filter-menu-demo.component';
import { OrderListFilteredComponent } from './components/order-list-filtered/order-list-filtered.component';
import { EmployeeDialogComponent } from './components/employee-list/employee-dialog/employee-dialog.component';

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
  // {
  //   path: 'employee-list',
  //   component: EmployeeListComponent
  // },
  {
    path: 'employee-list', children: [
      { path: '', component: EmployeeListComponent },
      { path: 'detail/:id', component: EmployeeDialogComponent }
    ]
  },
  {
    path: 'order-list-filtered',
    component: OrderListFilteredComponent
  },
  {
    path: 'table-filter-menu-demo',
    component: TableFilterMenuDemoComponent
  },
  // {
  //   path: 'order-maser',
  //   component: OrderMaserComponent
  // },
  { path: 'add-order-maser', component: AddEditOrderMasterComponent },
  {
    path: 'order-maser', children: [
      { path: '', component: OrderMaserComponent },
      { path: 'edit/:id', component: AddEditOrderMasterComponent }
    ]
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
