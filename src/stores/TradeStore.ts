import {observable, action, runInAction} from 'mobx';

export default class TradeStore {
  @observable tradeType = 'Raise/Fall';
  @observable payoutType = 'payout';
  @observable amount =  100;
  @observable startTime = 'Now';
  @observable duration = 3;
  @observable durationUnit = 'minutes';
  @observable chartMode = 'normal'; // 'small', 'big';

  @action.bound toggleChartMode() {
    const newMode = this.chartMode === 'normal' ? 'big' : 'normal';
    this.chartMode = newMode;
  }

  @action.bound setAmount(amount: number) {
    this.amount = amount;
  }

}

