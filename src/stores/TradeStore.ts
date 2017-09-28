import {observable, action, runInAction} from 'mobx';

export default class BrowseStore {
  @observable tradeType = 'Raise/Fall';
  @observable payoutType = 'payout';
  @observable amount =  100;
  @observable startTime = 'Now';
  @observable duration = 3;
  @observable durationUnit = 'minutes';

  @action.bound setAmount(amount: number) {
    this.amount = amount;
  }

}

