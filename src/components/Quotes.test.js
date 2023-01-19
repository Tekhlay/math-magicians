/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';
import Quotes from './Qoutes';

describe('Test Quotes component', () => {
  it('Test component should render properly', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
