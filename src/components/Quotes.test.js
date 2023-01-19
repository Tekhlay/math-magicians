import Quotes from "./Quotes";
import renderer from "react-test-renderer";

describe("Test Quotes component", () => {
  it("Test component should render properly", () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
