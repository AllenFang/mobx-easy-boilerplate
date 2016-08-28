/* eslint react/no-find-dom-node: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Info from 'components/info';
import stubApp from 'util/stub-app';

const should = chai.should();

describe('components/info.jsx Spec', () => {
  let stub;
  let node;
  let instance;

  describe('Info component', () => {
    beforeEach(() => {
      stub = stubApp()(Info, {});
      node = window.document.createElement('div');
      instance = ReactDOM.render(React.createElement(stub), node);
    });

    it('should render correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      should.exist(dom);
      dom.tagName.should.be.eq('SECTION');
      (dom.className.indexOf('buttons') > -1).should.be.ok;
      dom.childNodes.length.should.be.eq(2);
    });

    it('should render hyper link correctly', () => {
      const buttons = TestUtils.scryRenderedDOMComponentsWithClass(instance, 'button');
      should.exist(buttons);
      buttons.length.should.eql(2);

      buttons[0].href.should.be.eq(
        'https://github.com/AllenFang/mobx-easy-boilerplate/archive/master.zip');
      buttons[1].href.should.be.eq(
        'https://github.com/AllenFang/mobx-easy-boilerplate');
    });
  });
});
