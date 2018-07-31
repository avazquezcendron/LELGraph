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
import { SimbolosService } from './services/simbolos.service';
import { ImpactosService } from './services/impactos.service';
import { SimboloEditComponent } from './components/simbolo-edit/simbolo-edit.component';
import { LelGraphComponent } from './components/lel-graph/lel-graph.component';
import { LelStatsComponent } from './components/lel-stats/lel-stats.component';
import { LelListComponent } from './components/lels/list/lel-list.component';
import { D3Service, D3_DIRECTIVES } from './components/lel-graph/d3';
import { SHARED_VISUALS } from './components/lel-graph/shared';
import { AppRoutingModule } from './app-routing.module';
import { LelsRoutingModule } from './components/lels/lels-routing.module';
import { ImpactoEditComponent } from './components/impacto-edit/impacto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LelsComponent,
    LelEditComponent,
    SimboloEditComponent,
    LelGraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    LelStatsComponent,
    LelListComponent,
    ImpactoEditComponent
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
    AppRoutingModule,
    LelsRoutingModule
    // RouterModule.forRoot([
    //   { path: 'lels', component: LelsComponent },
    //   { path: 'lel-stats/:id' , component: LelStatsComponent },
    //   { path: 'lel-edit/:operacion/:id' , component: LelEditComponent },
    //   { path: 'simbolo-edit/:operacion/:lelId/:id' , component: SimboloEditComponent },
    //   { path: '', redirectTo: '/lels', pathMatch: 'full' },
    // ])
  ],
  providers: [LELsService, SimbolosService, ImpactosService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
