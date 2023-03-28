import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.component.html',
  styleUrls: ['budget.component.scss'],
})
export class BudgetComponent {
  enteredReason: string;
  enteredAmount: string;

  constructor() {}

  onClearInputs() {
    this.enteredReason = '';
    this.enteredAmount = '';
  }

  onAddExpense() {
    if (!this.enteredReason || !this.enteredAmount) {
      // TODO create alert!!!
      console.log('Please enter a valid reason and amount!');
      return;
    }
    if (this.enteredReason.trim().length <= 0 || +this.enteredAmount <= 0) {
      // TODO create alert!!!
      console.log('Please enter a valid reason and amount!');
      return;
    }
    console.log('Valid!!!');
  }
}
