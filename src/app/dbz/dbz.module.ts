import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({

  exports:[
    MainComponent,

  ],
  declarations: [
    MainComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  
})
export class DbzModule { }
