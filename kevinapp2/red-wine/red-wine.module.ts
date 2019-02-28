import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RedWinePage } from './red-wine.page';

/*const routes: Routes = [
  {
    path: '',
    component: RedWinePage
  }
];*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: RedWinePage }])
  ],
  declarations: [RedWinePage]
})
export class RedWinePageModule {}
