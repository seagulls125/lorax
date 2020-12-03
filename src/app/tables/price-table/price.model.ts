import { formatDate } from '@angular/common';

export class Price {
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
  constructor(price) {
    {
      this.id = price.id || this.getRandomID();
      this.img = price.avatar || 'assets/images/user/user1.jpg';
      this.fName = price.fName || '';
      this.lName = price.lName || '';
      this.email = price.email || '';
      this.gender = price.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = price.mobile || '';
      this.address = price.address || '';
      this.country = price.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
