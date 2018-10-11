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
      const profile = new Profile({birthdate: '1996-04-19'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Aries');
    });

    it('Determines [Taurus] zodiac for [April 20]', () => {
      const profile = new Profile({birthdate: '1996-04-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Taurus');
    });
    it('Determines [Taurus] zodiac for [May 20]', () => {
      const profile = new Profile({birthdate: '1996-05-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Taurus');
    });

    it('Determines [Gemini] zodiac for [May 21]', () => {
      const profile = new Profile({birthdate: '1996-05-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Gemini');
    });
    it('Determines [Gemini] zodiac for [June 20]', () => {
      const profile = new Profile({birthdate: '1996-06-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Gemini');
    });

    it('Determines [Cancer] zodiac for [July 21]', () => {
      const profile = new Profile({birthdate: '1996-05-21'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Gemini');
    });
    it('Determines [Cancer] zodiac for [June 20]', () => {
      const profile = new Profile({birthdate: '1996-06-20'});
      const zodiac = profile.getZodiacSign();
      assert.equal(zodiac, 'Gemini');
    });
  });
});
