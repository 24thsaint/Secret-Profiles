const Zodiac = require('./Zodiac');

class Profile {
  constructor(props) {
    Object.assign(this, props);
  }

  getZodiacSign() {
    const birthdate = new Date(this.birthdate);
    return Zodiac.getZodiacFromBirthdate(birthdate);
  }

  get fullName() {
    return `${this.title ? this.title : ''} ${this.firstName} ${this.middleName} ${this.lastName} ${this.suffix ? this.suffix : ''}`;
  }
}

module.exports = Profile;