const ZodiacSigns  = require('./Zodiac.config');
class Zodiac {
  static getZodiacFromBirthdate(birthdate) {
    const zodiacSigns = Object.keys(ZodiacSigns);
    const fullZodiacInfo = ZodiacSigns;

    const month = birthdate.getMonth();
    const day = birthdate.getDate();
    let year = 2000;

    if (month === 0 && day <= 20) {
      year = 2001;
    }

    const mockDate = new Date(`${month + 1}/${day}/${year}`);

    for (let index = 0; index < zodiacSigns.length; index++) {
      const element = zodiacSigns[index];
      const zodiacInfo = fullZodiacInfo[element];
      const startDate = zodiacInfo.start;
      const endDate = zodiacInfo.end;

      if (mockDate >= startDate && mockDate <= endDate) {
        return zodiacInfo.label;
      }
    }
  }
}

module.exports = Zodiac;