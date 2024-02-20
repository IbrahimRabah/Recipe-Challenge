import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
    SpinnerComponent,
    StripHtmlPipe
  ],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    NotFoundComponent,
    StripHtmlPipe
  ]
})
export class SharedModule { }
