import { formatDate } from '@angular/common';

export class Category {
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
  constructor(category) {
    {
      this.id = category.id || this.getRandomID();
      this.img = category.avatar || 'assets/images/user/user1.jpg';
      this.fName = category.fName || '';
      this.lName = category.lName || '';
      this.email = category.email || '';
      this.gender = category.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = category.mobile || '';
      this.address = category.address || '';
      this.country = category.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
