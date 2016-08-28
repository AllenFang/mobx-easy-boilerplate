/* eslint react/no-find-dom-node: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Title from 'components/title';
import stubApp from 'util/stub-app';

const should = chai.should();

describe('components/title.jsx Spec', () => {
  let stub;
  let node;
  let instance;

  describe('Title component', () => {
    beforeEach(() => {
      stub = stubApp()(Title, {});
      node = window.document.createElement('div');
      instance = ReactDOM.render(React.createElement(stub), node);
    });

    it('should render correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      should.exist(dom);
      dom.tagName.should.be.eq('SECTION');
      dom.textContent.should.be.eq('Mobx Easy Boilerplate');
    });
  });
});
