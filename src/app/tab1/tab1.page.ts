import { Component, OnInit, Input } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { DataTeethService } from '../service/data-teeth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  time: string = '';
  name: string = '';
  zoneTeeth: string = '';
  temps: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isRunning: boolean = false;
  zoneTeethTime: string = '';
  timeRepos: string = '';
  timer: any;
  timerBreak: any;

  constructor(private teethService: DataTeethService) {}

  async ionViewWillEnter() {
    this.name = (await Preferences.get({ key: 'name' })).value!;
    this.time = (await Preferences.get({ key: 'time' })).value!;
    this.zoneTeeth = (await Preferences.get({ key: 'zoneTeeth' })).value!;
    this.timeRepos = (await Preferences.get({ key: 'timeRepos' })).value!;
    this.zoneTeethTime = (
      await Preferences.get({ key: 'zoneTeethTime' })
    ).value!;
  }

  ngOnInit(): void {}

  teethMinute = parseInt(this.time);
  teethTimeBreak = parseInt(this.timeRepos);

  teethTimeZone = parseInt(this.zoneTeethTime);

  nbreZoneTeeth = parseInt(this.zoneTeeth);

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.minutes++;
          this.seconds = 0;
        } else if (this.minutes === this.teethMinute) {
          this.teethMinute = 0;
          this.nbreZoneTeeth--;
          this.isRunning = false;
        }
      }, 1000);
    }
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = false;
      this.nbreZoneTeeth--;
      clearInterval(this.timer);
    }
  }
  reset() {
    this.minutes = 0;
    this.seconds = 0;
    this.isRunning = false;
    clearInterval(this.timer);
  }
}
