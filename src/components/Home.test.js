import Home from "./Home";
import renderer from "react-test-renderer";

describe("Test Home component", () => {
  it("Home component should match snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
