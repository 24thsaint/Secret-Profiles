class Zodiac {
  static getZodiacs() {
    this.zodiacs = {
      aries: {
        start: {
          month: 2,
          day: 21
        },
        end: {
          month: 3,
          day: 19
        },
        label: 'Aries'
      },
      taurus: {
        start: {
          month: 3,
          day: 20,
        },
        end: {
          month: 4,
          day: 20
        },
        label: 'Taurus'
      },
      gemini: {
        start: {
          month: 4,
          day: 21
        },
        end: {
          month: 5,
          day: 20
        },
        label: 'Gemini'
      },
      cancer: {
        start: {
          month: 5,
          day: 21
        },
        end: {
          month: 6,
          day: 22
        },
        label: 'Cancer'
      },
      leo: {
        start: {
          month: 6,
          day: 23,
        },
        end: {
          month: 7,
          day: 22
        },
        label: 'Leo'
      },
      virgo: {
        start: {
          month: 7,
          day: 23
        },
        end: {
          month: 8,
          day: 22
        },
        'label': 'Virgo'
      },
      libra: {
        start: {
          month: 8,
          day: 23
        },
        end: {
          month: 9,
          day: 22
        },
        label: 'Libra'
      },
      scorpio: {
        start: {
          month: 9,
          day: 23
        },
        end: {
          month: 10,
          day: 21
        },
        label: 'Scorpio'
      },
      sagittarius: {
        start: {
          month: 11,
          day: 22
        },
        end: {
          month: 11,
          day: 21
        },
        label: 'Saggitarius'
      },
      capricorn: {
        start: {
          month: 11,
          day: 22
        },
        end: {
          month: 0,
          day: 19
        },
        label: 'Capricorn'
      },
      aquarius: {
        start: {
          month: 0,
          day: 20
        },
        end: {
          month: 1,
          day: 18
        },
        label: 'Aquarius'
      },
      pisces: {
        start: {
          month: 1,
          day: 19
        },
        end: {
          month: 2,
          day: 20
        },
        label: 'Pisces'
      }
    };
    return this.zodiacs;
  }


  static getZodiacFromBirthdate(birthdate) {
    const zodiacSigns = Object.keys(Zodiac.getZodiacs());
    const fullZodiacInfo = Zodiac.getZodiacs();

    const month = birthdate.getMonth();
    const day = birthdate.getDate();
    const year = 2000;

    const mockDate = new Date(`${month}/${day}/${year}`);

    for (let index = 0; index < zodiacSigns.length; index++) {
      const element = zodiacSigns[index];
      const zodiacInfo = fullZodiacInfo[element];
      const startDate = new Date(`${zodiacInfo.start.month}/${zodiacInfo.start.day}/${year}`);
      const endDate = new Date(`${zodiacInfo.end.month}/${zodiacInfo.end.day}/${year}`);

      if (mockDate >= startDate && mockDate <= endDate) {
        return zodiacInfo.label;
      }
    }
  }
}

module.exports = Zodiac;