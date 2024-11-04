import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonInput, NgClass, IonHeader, IonToolbar, IonTitle, IonContent, ReactiveFormsModule, CommonModule],
})
export class HomePage {
  username = '';
  phone = '';
  myForm = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    phone: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
  });
  constructor(private formBuilder: FormBuilder) {

  }
}
