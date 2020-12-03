import { formatDate } from '@angular/common';

export class Store {
  id: number;
  img: string;
  fName: string;
  lName: string;
  email: string;
  gender: string;
  bDate: string;
  mobile: string;
  address: string;
  country: string;
  constructor(store) {
    {
      this.id = store.id || this.getRandomID();
      this.img = store.avatar || 'assets/images/user/user1.jpg';
      this.fName = store.fName || '';
      this.lName = store.lName || '';
      this.email = store.email || '';
      this.gender = store.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = store.mobile || '';
      this.address = store.address || '';
      this.country = store.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
