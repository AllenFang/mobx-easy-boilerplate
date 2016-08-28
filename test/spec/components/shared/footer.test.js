/* eslint react/no-find-dom-node: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from 'components/shared/footer';
import stubApp from 'util/stub-app';

const should = chai.should();

describe('components/shared/footer.jsx Spec', () => {
  let stub;
  let node;
  let instance;

  describe('Footer component', () => {
    beforeEach(() => {
      stub = stubApp()(Footer, {});
      node = window.document.createElement('div');
      instance = ReactDOM.render(React.createElement(stub), node);
    });

    it('should render correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      should.exist(dom);
      dom.tagName.should.be.eq('FOOTER');
      dom.childNodes.length.should.be.eq(2);
    });
  });
});
