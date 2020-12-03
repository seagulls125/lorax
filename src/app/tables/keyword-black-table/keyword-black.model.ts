import { formatDate } from '@angular/common';

export class KeywordBlack {
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
  constructor(keywordBlack) {
    {
      this.id = keywordBlack.id || this.getRandomID();
      this.img = keywordBlack.avatar || 'assets/images/user/user1.jpg';
      this.fName = keywordBlack.fName || '';
      this.lName = keywordBlack.lName || '';
      this.email = keywordBlack.email || '';
      this.gender = keywordBlack.gender || 'male';
      this.bDate = formatDate(new Date(), 'yyyy-MM-dd', 'en') || '';
      this.mobile = keywordBlack.mobile || '';
      this.address = keywordBlack.address || '';
      this.country = keywordBlack.country || '';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
