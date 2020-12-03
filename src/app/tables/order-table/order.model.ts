import { formatDate } from '@angular/common';

export class Order {
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
  constructor(order) {
    {
      this.id = order.id || this.getRandomID();
      this.img = order.avatar || 'assets/images/user/user1.jpg';
      this.fName = order.fName || '';
      this.lName = order.lName || '';
      this.email = order.email || '';
      this.gender = order.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = order.mobile || '';
      this.address = order.address || '';
      this.country = order.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
