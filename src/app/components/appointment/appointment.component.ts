import { Component } from '@angular/core';
import {NgbAlert, NgbDateStruct, NgbInputDatepicker, NgbTimepicker, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    NgbInputDatepicker,
    FormsModule,
    NgbAlert,
    JsonPipe,
    NgbTimepicker
  ],
  templateUrl: './appointment.component.html',
  styles: ``
})
export class AppointmentComponent {

}
