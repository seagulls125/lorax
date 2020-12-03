import { formatDate } from '@angular/common';

export class ProductPool {
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
  constructor(productPool) {
    {
      this.id = productPool.id || this.getRandomID();
      this.img = productPool.avatar || 'assets/images/user/user1.jpg';
      this.fName = productPool.fName || '';
      this.lName = productPool.lName || '';
      this.email = productPool.email || '';
      this.gender = productPool.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = productPool.mobile || '';
      this.address = productPool.address || '';
      this.country = productPool.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
