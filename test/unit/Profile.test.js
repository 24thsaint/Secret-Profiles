const assert = require('assert');
const Profile = require('../../src/models/Profile');

describe('Profile', () => {
  describe('.getZodiacSign()', () => {
    it('Determines [Aries] zodiac for [March 22]', () => {
      const profile = new Profile({birthdate: '1996-03-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Aries');
    });
    it('Determines [Aries] zodiac for [April 19]', () => {
      const profile = new Profile({birthdate: '1996-04-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Aries');
    });

    it('Determines [Taurus] zodiac for [April 20]', () => {
      const profile = new Profile({birthdate: '1996-04-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Taurus');
    });
    it('Determines [Taurus] zodiac for [May 20]', () => {
      const profile = new Profile({birthdate: '1996-05-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Taurus');
    });

    it('Determines [Gemini] zodiac for [May 21]', () => {
      const profile = new Profile({birthdate: '1996-05-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Gemini');
    });
    it('Determines [Gemini] zodiac for [June 20]', () => {
      const profile = new Profile({birthdate: '1996-06-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Gemini');
    });

    it('Determines [Cancer] zodiac for [June 21]', () => {
      const profile = new Profile({birthdate: '1996-06-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Cancer');
    });
    it('Determines [Cancer] zodiac for [July 20]', () => {
      const profile = new Profile({birthdate: '1996-07-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Cancer');
    });

    it('Determines [Leo] zodiac for [July 23]', () => {
      const profile = new Profile({birthdate: '1996-07-23'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Leo');
    });
    it('Determines [Leo] zodiac for [August 22]', () => {
      const profile = new Profile({birthdate: '1996-08-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Leo');
    });

    it('Determines [Virgo] zodiac for [August 23]', () => {
      const profile = new Profile({birthdate: '1996-08-23'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Virgo');
    });
    it('Determines [Virgo] zodiac for [September 23]', () => {
      const profile = new Profile({birthdate: '1996-09-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Virgo');
    });

    it('Determines [Libra] zodiac for [September 24]', () => {
      const profile = new Profile({birthdate: '1996-09-24'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Libra');
    });
    it('Determines [Libra] zodiac for [October 23]', () => {
      const profile = new Profile({birthdate: '1996-10-23'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Libra');
    });

    it('Determines [Scorpio] zodiac for [October 24]', () => {
      const profile = new Profile({birthdate: '1996-10-24'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Scorpio');
    });
    it('Determines [Scorpio] zodiac for [November 22]', () => {
      const profile = new Profile({birthdate: '1996-11-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Scorpio');
    });

    it('Determines [Sagittarius] zodiac for [November 23]', () => {
      const profile = new Profile({birthdate: '1996-11-23'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Sagittarius');
    });
    it('Determines [Sagittarius] zodiac for [December 21]', () => {
      const profile = new Profile({birthdate: '1996-12-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Sagittarius');
    });

    it('Determines [Capricorn] zodiac for [December 22]', () => {
      const profile = new Profile({birthdate: '1996-12-22'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Capricorn');
    });
    it('Determines [Capricorn] zodiac for [January 20]', () => {
      const profile = new Profile({birthdate: '1996-01-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Capricorn');
    });

    it('Determines [Aquarius] zodiac for [January 21]', () => {
      const profile = new Profile({birthdate: '1996-01-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Aquarius');
    });
    it('Determines [Aquarius] zodiac for [February 19]', () => {
      const profile = new Profile({birthdate: '1996-02-19'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Aquarius');
    });

    it('Determines [Pisces] zodiac for [February 20]', () => {
      const profile = new Profile({birthdate: '1996-02-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Pisces');
    });
    it('Determines [Pisces] zodiac for [March 20]', () => {
      const profile = new Profile({birthdate: '1996-03-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Pisces');
    });
  });
});
