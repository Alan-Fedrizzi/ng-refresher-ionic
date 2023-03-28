import { Component } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.component.html',
  styleUrls: ['budget.component.scss'],
})
export class BudgetComponent {
  enteredReason: string;
  enteredAmount: string;
  totalAmountText: string;
  totalAmountNumber = 0;
  expenseList: { reason: string; amount: string }[] = [];

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
    const n = +this.enteredAmount;
    this.expenseList.push({ reason: this.enteredReason, amount: n.toFixed(2) });
    this.totalAmountNumber += n;
    this.totalAmountText = this.totalAmountNumber.toFixed(2);
    this.onClearInputs();
  }

  onRemoveExpense(i: number) {
    this.totalAmountNumber -= +this.expenseList[i].amount;
    this.totalAmountText = this.totalAmountNumber.toFixed(2);
    this.expenseList.splice(i, 1);
  }
}
