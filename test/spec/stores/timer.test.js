import timerStore from 'stores/timer';

describe('stores/timer.jss Spec', () => {
  describe('Timer Store', () => {
    it('timer should be zero on initialization', () => {
      timerStore.timer.should.be.eq(0);
    });

    it('timer should be zero if resetTimer be called', () => {
      timerStore.resetTimer();
      timerStore.timer.should.be.eq(0);
    });
  });
});
