import { Header } from "./Header";
import { render } from "~/testUtils";

describe("Header", () => {
  it("should render title and subtitle", () => {
    const title = "Hello World";
    const subtitle = "Welcome to my app";
    const { getByText } = render(<Header title={title} subtitle={subtitle} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
  });

  it("should render left and right slots", () => {
    const leftSlot = <button>Left Button</button>;
    const rightSlot = <button>Right Button</button>;
    const { getByText } = render(
      <Header leftSlot={leftSlot} rightSlot={rightSlot} />,
    );
    expect(getByText("Left Button")).toBeInTheDocument();
    expect(getByText("Right Button")).toBeInTheDocument();
  });
});
