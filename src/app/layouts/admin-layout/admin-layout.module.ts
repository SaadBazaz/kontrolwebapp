import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TasksPanelComponent } from '../../tasks/tasks-panel.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../generate/typography.component';
import { CustomerCardsComponent } from '../../customercards/customercards.component';
import { MapsComponent } from '../../maps/maps.component';
import { ChequesComponent } from '../../cheques/cheques-panel.component';
import { UpgradeComponent } from '../../pages/upgrade.component';
import { LoginPageComponent } from '../../pages/login-page/login-page.component'


// import { LoginGuard } from './login.guard'
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
// import { environment } from '../../../environments/environment';


import {MAT_MOMENT_DATE_FORMATS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {PopupService} from 'app/shared/popup-service.service';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatExpansionModule,
  MatChipsModule

} from '@angular/material';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import { PapaParseModule } from 'papaparse';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),


    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,


    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatExpansionModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule
    // PapaParseModule,
    // AngularFirestore
  ],
  entryComponents: [PopupService],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
        // AngularFirestore
  ],
  declarations: [
    DashboardComponent,
    TasksPanelComponent,
    TableListComponent,
    TypographyComponent,
    CustomerCardsComponent,
    MapsComponent,
    ChequesComponent,
    UpgradeComponent,
    // LoginPageComponent,
    PopupService,
    // LoginGuard
  ],
})

export class AdminLayoutModule {}
