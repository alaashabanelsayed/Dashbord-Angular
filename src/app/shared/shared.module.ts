import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component'; 
import { FooterComponent } from './component/footer/footer.component';
 import { SidebarComponent } from './component/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieChartComponent } from './widgets/pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    HeaderComponent,
     FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    

  ],
  exports:[
    HeaderComponent,
     FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieChartComponent,
   

  ]
})
export class SharedModule { }
