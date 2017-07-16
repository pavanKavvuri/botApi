import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import c3 from 'c3';

import { ScoreCardPage } from '../score-card/score-card';
import { ChatUsersPage } from '../chat-users/chat-users';
import { KeyUpdatesComponent } from '../../components/key-updates/key-updates';

import { GroupSelectionProvider } from '../../providers/group-selection/group-selection';
import { ChartDataProvider } from '../../providers/chart-data/chart-data';

//import { incidentChart, enhancementChart, serviceRequestChart, agingChart } from '../../assets/data/chartConfig';
import { chartRendererMap } from '../../assets/data/apiRespChartsNames';

import Group from '../../models/group';
import { ChartData } from '../../models/chartData';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('activeIncidentsChart') activeIncidentsChart: ElementRef;
  @ViewChild('activeEnhancementsChart') activeEnhancementsChart: ElementRef;
  @ViewChild('serviceRequestsChart') serviceRequestsChart: ElementRef;
  @ViewChild('agingTrendChart') agingTrendChart: ElementRef;

  chartIncident: any;
  chartEnhancement: any;
  chartServiceReq: any;
  chartAging: any;

  segment: string = 'week';
  showScores: boolean = false;
  chartsData: Array<ChartData>;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public groupSelectionService: GroupSelectionProvider,
    public chartDataService: ChartDataProvider) {

    this.chartDataService.load();

    this.presentLoadingCustom();

  }

  ionViewDidLoad() {
  }

  prepLoadData(chartData: ChartData) {
    let data = {
      columns: []
    };

    chartData.content.map((d, i) => {
      data.columns.push([String(i + 1), ...d]);
    });

    return data;
  }

  drawCharts() {

    let { charts } = this.groupSelectionService.getSelectedGroup();
    let renderers = [];
    charts.map((chartName) => {
      renderers.push(chartRendererMap[chartName]);
    });

    console.log(renderers);

    //Incidents Chart
    if (!this.chartIncident)
      this.chartIncident = c3.generate(renderers[0](this.activeIncidentsChart, this.chartsData[0]));
    else
      this.chartIncident.load(this.prepLoadData(this.chartsData[0]));

    //Enhancements Chart
    if (!this.chartEnhancement)
      this.chartEnhancement = c3.generate(renderers[1](this.activeEnhancementsChart, this.chartsData[1]));
    else
      this.chartEnhancement.load(this.prepLoadData(this.chartsData[1]));

    //Service Request Chart
    if (!this.chartServiceReq)
      this.chartServiceReq = c3.generate(renderers[2](this.serviceRequestsChart, this.chartsData[2]));
    else
      this.chartServiceReq.load(this.prepLoadData(this.chartsData[2]));

    //Aging Chart
    if (!this.chartAging)
      this.chartAging = c3.generate(renderers[3](this.agingTrendChart, this.chartsData[3]));
    else
      this.chartAging.load(this.prepLoadData(this.chartsData[3]));

  }

  showScoreCard(cardName: string) {
    this.navCtrl.push(ScoreCardPage, {
      kpi: cardName
    });
  }

  onKeyUpdateClick() {

    let profileModal = this.modalCtrl.create(KeyUpdatesComponent, { userId: 8675309 });
    profileModal.present();

  }

  onNotifClick() {
    let toast = this.toastCtrl.create({
      message: 'Coming soon ...',
      duration: 2000
    });
    toast.present();
  }

  onChatClick() {
    this.navCtrl.push(ChatUsersPage);
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: `Loading data...`,
      duration: 1000
    });

    loading.onDidDismiss(() => {

      // Service subscribe
      this.groupSelectionService.currentGroup().subscribe((group: Group) => {
        console.log('HOME -> ', group.value);
        this.showScores = group.showScores;
        this.chartsData = this.chartDataService.getGroupData(group.value);
        console.log(this.chartsData);
        this.drawCharts();
      });
    });

    loading.present();
  }

}
