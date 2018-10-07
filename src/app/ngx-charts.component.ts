import { Component } from '@angular/core';
import { lineChartMulti} from './ngxChart';
import * as chartsData from './ngx-charts.config';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx-charts.component.html'
})
export class NGXChartsComponent {

    results = lineChartMulti;
  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, { lineChartMulti })
  }

  onSelect(event) {
    console.log(event);
  }

}
