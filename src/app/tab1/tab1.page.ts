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
  teethMinute: number = 0;
  teethTimeBreak: number = 0;
  teethTimeZone: number = 0;
  nbreZoneTeeth: number = 0;

  constructor() {}

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

  start() {
    this.teethMinute = parseInt(this.time);
    this.teethTimeBreak = parseInt(this.timeRepos);
    this.teethTimeZone = parseInt(this.zoneTeethTime);
    this.nbreZoneTeeth = parseInt(this.zoneTeeth);

    if (!this.isRunning) {
      this.isRunning = true;
      this.timer = setInterval(() => {
        this.seconds++;
        console.log(this.seconds + ' / ' + this.teethTimeBreak);
        if (this.seconds == this.teethTimeBreak) {
          console.log(this.nbreZoneTeeth);
          console.log(this.zoneTeeth);
          this.getTimeBreak();
          this.seconds = 0;
          clearInterval(this.timer);
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
  }

  getTimeBreak() {
    this.teethMinute = parseInt(this.time);
    this.teethTimeBreak = parseInt(this.timeRepos);
    this.teethTimeZone = parseInt(this.zoneTeethTime);
    this.nbreZoneTeeth = parseInt(this.zoneTeeth);

    if (this.seconds == this.teethTimeBreak) {
      this.nbreZoneTeeth--;
      clearInterval(this.timer);
    }
  }
}
