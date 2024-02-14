import {AfterViewInit, Component} from '@angular/core';
import {NgbAlert, NgbDateStruct, NgbInputDatepicker, NgbTimepicker, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import ScrollReveal from 'scrollreveal';

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
export class AppointmentComponent implements AfterViewInit{

  ngAfterViewInit() {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 900,
      delay: 600
    });

    sr.reveal('.appointment__title');
    sr.reveal('.appointment__form');
  }
}
