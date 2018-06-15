import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { LelsComponent } from './components/lels/lels.component';
import { LELsService } from './services/lels.service';
import { LelEditComponent } from './components/lel-edit/lel-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LelsComponent,
    LelEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: 'lels' , component: LelsComponent},
      { path: 'lel-edit/:operacion/:id' , component: LelEditComponent},
      { path: '', redirectTo: '/lels', pathMatch: 'full' },
    ])
  ],
  providers: [LELsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
