import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService,ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ProductComponent } from './components/product/product.component';
import { DialogModule } from 'primeng/dialog';
import { AddEditProductComponent } from './components/product/add-edit-product/add-edit-product.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductLazyLoadListComponent } from './components/product-lazy-load-list/product-lazy-load-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { OrderMaserComponent } from './components/order-maser/order-maser.component';
import { AddEditOrderMasterComponent } from './components/order-maser/add-edit-order-master/add-edit-order-master.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TodoListComponent,
    ProductComponent,
    AddEditProductComponent,
    ProductLazyLoadListComponent,
    PlayGroundComponent,
    EmployeeListComponent,
    OrderMaserComponent,
    AddEditOrderMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    TableModule,
    CheckboxModule,
    FormsModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    ConfirmDialogModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    AutoCompleteModule  
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
