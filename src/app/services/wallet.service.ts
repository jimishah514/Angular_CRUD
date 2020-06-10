import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private wallets: Wallet[] = [
    {
      id: 1,
      name: 'Bitcoin',
      code: 'BTC',
      balance: 0
    },
    {
      id: 2,
      name: 'DDKoin',
      code: 'DDK',
      balance: 0
    }
  ];

  constructor() { }

  getWalletsFromData(): Wallet[] {
    return this.wallets;
  }

  addWallet(wallet: Wallet) {
    wallet.id = this.wallets.length + 1;
    this.wallets.push(wallet);

  }
  updateWallet(wallet: Wallet) {
    const index = this.wallets.findIndex(u => wallet.id === u.id);
    this.wallets[index] = wallet;
  }
  deleteWallet(wallet: Wallet) {
    this.wallets.splice(this.wallets.indexOf(wallet), 1);
  }

}
