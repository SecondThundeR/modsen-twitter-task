import { FONT_FAMILY_MAP } from "@/shared/constants/fontFamily";
import { WEIGHTS_MAP } from "@/shared/constants/weights";
import { SectionButton } from "./SectionButton";
import { render, fireEvent } from "~/testUtils";

describe("SectionButton", () => {
  const onClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render with regular icon and text", () => {
    const { getByText, getByTestId } = render(
      <SectionButton
        text="Test"
        regularIcon={() => <div data-testid="icon" />}
      />,
    );
    const button = getByText("Test");

    expect(getByTestId("icon")).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyleRule("font-family", FONT_FAMILY_MAP.roboto);
    expect(button).toHaveStyleRule("font-weight", String(WEIGHTS_MAP.semibold));
  });

  it("should render with filled icon when isActive is true", () => {
    const { getByText, queryByTestId } = render(
      <SectionButton
        text="Test"
        regularIcon={() => <div data-testid="regular-icon" />}
        filledIcon={() => <div data-testid="filled-icon" />}
        isActive={true}
      />,
    );
    const button = getByText("Test");

    expect(queryByTestId("filled-icon")).toBeInTheDocument();
    expect(queryByTestId("regular-icon")).not.toBeInTheDocument();
    expect(button).toHaveStyleRule("font-family", FONT_FAMILY_MAP.robotoSerif);
    expect(button).toHaveStyleRule("font-weight", String(WEIGHTS_MAP.bold));
  });

  it("calls onClick when clicked", () => {
    const { getByRole } = render(
      <SectionButton
        text="Test"
        regularIcon={() => <div data-testid="icon" />}
        onClick={onClick}
      />,
    );

    fireEvent.click(getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
