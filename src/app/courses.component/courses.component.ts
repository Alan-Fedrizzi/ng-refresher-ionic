import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.scss'],
})
export class CoursesComponent {
  enteredCourse: string;
  enteredRating: string;
  courseList: { name: string; rating: string }[] = [];

  constructor() {}

  onClearInputs() {
    this.enteredCourse = '';
    this.enteredRating = '';
  }

  async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Inputs!';
    alert.message =
      'Please enter a valid course name and rating (between 1 and 5).';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
  }

  onAddCourse() {
    if (!this.enteredCourse || !this.enteredRating) {
      this.presentAlert();
      return;
    }
    if (
      this.enteredCourse.trim().length <= 0 ||
      +this.enteredRating <= 0 ||
      +this.enteredRating > 5
    ) {
      this.presentAlert();
      return;
    }
    this.courseList.push({
      name: this.enteredCourse,
      rating: this.enteredRating,
    });
    this.onClearInputs();
  }

  onRemoveCourse(i: number) {
    this.courseList.splice(i, 1);
  }
}
