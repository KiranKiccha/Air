import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentalModule } from './rental/rental.module';
import { RentalComponent } from './rental/rental.component';
import { CommonModule } from '@angular/common';

const routes:Routes=[
  {path:'',redirectTo:'/rentals',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

   
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    RentalModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
