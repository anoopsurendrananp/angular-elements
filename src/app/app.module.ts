import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { TooltipModule } from 'ng2-tooltip-directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ManageFileComponent } from './manage-file/manage-file.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      ManageFileComponent
   ],
   imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      UploaderModule,
      TooltipModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


