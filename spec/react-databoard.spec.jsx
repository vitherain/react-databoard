import React from 'react/addons';
import ReactDataboard from '../lib/react-databoard.jsx';

describe('ReactDataboard', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactDataboard/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-databoard');
  });
});
