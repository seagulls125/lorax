import { formatDate } from '@angular/common';

export class BrandPool {
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
  constructor(brandPool) {
    {
      this.id = brandPool.id || this.getRandomID();
      this.img = brandPool.avatar || 'assets/images/user/user1.jpg';
      this.fName = brandPool.fName || '';
      this.lName = brandPool.lName || '';
      this.email = brandPool.email || '';
      this.gender = brandPool.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = brandPool.mobile || '';
      this.address = brandPool.address || '';
      this.country = brandPool.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
