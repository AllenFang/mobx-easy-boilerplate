/* eslint react/no-find-dom-node: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Project from 'components/project';
import stubApp from 'util/stub-app';

const should = chai.should();

describe('components/project.jsx Spec', () => {
  let stub;
  let node;
  let instance;

  describe('Project component', () => {
    beforeEach(() => {
      stub = stubApp()(Project, {});
      node = window.document.createElement('div');
      instance = ReactDOM.render(React.createElement(stub), node);
    });

    it('should render correctly', () => {
      const dom = ReactDOM.findDOMNode(instance);
      should.exist(dom);
      dom.tagName.should.be.eq('SECTION');
      dom.childNodes.length.should.be.eq(1);
      dom.childNodes[0].childNodes.length.should.be.eq(3);
    });
  });
});
