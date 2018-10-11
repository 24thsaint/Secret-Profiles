const Zodiac = require('./Zodiac');

class Profile {
  constructor(props) {
    Object.assign(this, props);
  }

  getZodiacSign() {
    const birthdate = new Date(this.birthdate);
    return Zodiac.getZodiacFromBirthdate(birthdate);
  }
}

module.exports = Profile;