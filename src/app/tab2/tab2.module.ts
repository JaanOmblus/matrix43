import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';

import { AdviceComponent } from '../matrixAdvice/matrixAdvice.component';
import { AdviceLComponent } from '../matrixAdviceL/matrixAdviceL.component';
import { AdviceL2Component } from '../matrixAdviceL2/matrixAdviceL2.component';
import { BChartComponent } from '../matrixBChart/matrixBChart.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [Tab2Page, AdviceComponent, AdviceLComponent, AdviceL2Component, BChartComponent]
})
export class Tab2PageModule {}
