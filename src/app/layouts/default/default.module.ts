import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashbordComponent } from 'src/app/modules/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { DashbordService } from 'src/app/modules/dashbord.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    PostsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule

     
  ],
  providers:[
    DashbordService
  ]
})
export class DefaultModule { }
