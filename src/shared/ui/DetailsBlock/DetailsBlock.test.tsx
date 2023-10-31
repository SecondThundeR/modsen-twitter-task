import { DetailsBlock } from "./DetailsBlock";
import { render } from "~/testUtils";

describe("DetailsBlock", () => {
  it("should render the title and children", () => {
    const title = "Test Title";
    const children = <div>Test Children</div>;
    const { getByText } = render(
      <DetailsBlock title={title}>{children}</DetailsBlock>,
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText("Test Children")).toBeInTheDocument();
  });
});
