/* eslint react/no-find-dom-node: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Timer from 'containers/timer';
import timerStore from 'stores/timer';
import stubApp from 'util/stub-app';

const should = chai.should();

describe('containers/timer.jsx Spec', () => {
  let stub;
  let node;
  let instance;
  let spy;

  describe('Timer component', () => {
    beforeEach(() => {
      stub = stubApp()(Timer, {
        timerStore
      });
      node = window.document.createElement('div');
      instance = ReactDOM.render(React.createElement(stub), node);
    });

    it('should render correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      should.exist(dom);
      dom.tagName.should.be.eq('SECTION');
      (dom.className.indexOf('buttons') > -1).should.be.ok;
      dom.childNodes.length.should.be.eq(1);
    });

    it('should fire resetTimer if click the reset button', () => {
      spy = sinon.spy();
      timerStore.resetTimer = spy;

      const buttons =
        TestUtils.scryRenderedDOMComponentsWithClass(instance, 'button');
      should.exist(buttons);
      buttons.length.should.be.eq(1);
      TestUtils.Simulate.click(buttons[0]);
      spy.should.have.been.calledOnce;
    });
  });
});
