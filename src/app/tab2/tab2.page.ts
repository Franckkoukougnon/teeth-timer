import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Preferences } from '@capacitor/preferences';
import { DataTeethService } from '../service/data-teeth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  teethTime: FormGroup;
  name: string = '';
  zoneTeeth: string = '';
  time: string = '';
  zoneTeethTime: string = '';
  timeRepos: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.teethTime = this.formBuilder.group({
      name: ['', Validators.required],
      time: [0, Validators.required],
      zoneTeeth: ['', Validators.required],
      zoneTeethTime: [0, Validators.required],
      timeRepos: [0, Validators.required],
    });
  }

  async teethTimeForm() {
    await Preferences.set({
      key: 'name',
      value: this.teethTime.get('name')?.value,
    });
    await Preferences.set({
      key: 'time',
      value: this.teethTime.get('time')?.value,
    });
    await Preferences.set({
      key: 'zoneTeeth',
      value: this.teethTime.get('zoneTeeth')?.value,
    });
    await Preferences.set({
      key: 'zoneTeethTime',
      value: this.teethTime.get('zoneTeethTime')?.value,
    });
    await Preferences.set({
      key: 'timeRepos',
      value: this.teethTime.get('timeRepos')?.value,
    });
    console.log(
      'button form ' +
        Preferences.get({ key: 'name' }) +
        ' ' +
        Preferences.get({ key: 'zoneBrush' })
    );
  }
}
