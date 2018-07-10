import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';


// snapshot serailizer for producing more human readable snapshots
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

Enzyme.configure({ adapter: new Adapter() });

// mock localStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};


// avail these to the global context for testing environment
global.localStorage = new LocalStorageMock;
global.React = React;
global.MemoryRouter = MemoryRouter;
global.PropTypes = PropTypes;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.sinon = sinon;
