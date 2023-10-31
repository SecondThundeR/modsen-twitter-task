import { TabItem } from "./TabItem";
import { render } from "~/testUtils";

describe("TabItem", () => {
  it("should render the text prop", () => {
    const text = "My Tab";
    const { getByText } = render(<TabItem text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });
});
