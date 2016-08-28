/* eslint react/no-find-dom-node: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/shared/header';
import stubApp from 'util/stub-app';

const should = chai.should();

describe('components/shared/header.jsx Spec', () => {
  let stub;
  let node;
  let instance;

  describe('Header component', () => {
    beforeEach(() => {
      stub = stubApp()(Header, {});
      node = window.document.createElement('div');
      instance = ReactDOM.render(React.createElement(stub), node);
    });

    it('should render correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      should.exist(dom);
      dom.tagName.should.be.eq('UL');
      (dom.className.indexOf('nav-ul') > -1).should.be.ok;
    });

    it('should render li correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      dom.childNodes.length.should.be.eq(2);

      dom.childNodes[0].tagName.should.be.eq('LI');
      dom.childNodes[0].textContent = 'Home';
      dom.childNodes[0].childNodes.length.should.be.eq(1);

      dom.childNodes[1].tagName.should.be.eq('LI');
      dom.childNodes[1].textContent = 'Timer Demo';
      dom.childNodes[1].childNodes.length.should.be.eq(1);
    });
  });
});
