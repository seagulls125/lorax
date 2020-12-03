import { formatDate } from '@angular/common';

export class CategoryBlack {
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
  constructor(categoryBlack) {
    {
      this.id = categoryBlack.id || this.getRandomID();
      this.img = categoryBlack.avatar || 'assets/images/user/user1.jpg';
      this.fName = categoryBlack.fName || '';
      this.lName = categoryBlack.lName || '';
      this.email = categoryBlack.email || '';
      this.gender = categoryBlack.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = categoryBlack.mobile || '';
      this.address = categoryBlack.address || '';
      this.country = categoryBlack.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
