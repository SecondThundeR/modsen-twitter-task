import { FULL_INVERT, NO_INVERT } from "../../constants/generalStyles";
import { DIMENSIONS_MAP } from "../../constants/sizing";
import { IconButton } from "./IconButton";
import { render, darkRender, fireEvent } from "~/testUtils";

describe("IconButton", () => {
  const testIcon = <div>icon</div>;

  it("should render the icon", () => {
    const { getByText } = render(<IconButton icon={testIcon} />);

    expect(getByText("icon")).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByText, getByTestId } = render(
      <IconButton icon={testIcon} onClick={handleClick} />,
    );

    fireEvent.click(getByText("icon"));
    expect(handleClick).toHaveBeenCalled();
    expect(getByTestId("icon-button")).toHaveStyleRule(
      "height",
      DIMENSIONS_MAP.fit,
    );
  });

  it("should have full height when fullHeight prop is passed", () => {
    const { getByTestId } = render(<IconButton icon={testIcon} fullHeight />);

    expect(getByTestId("icon-button")).toHaveStyleRule(
      "height",
      DIMENSIONS_MAP.full,
    );
  });

  it("should disable the button when disabled prop is true", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <IconButton icon={testIcon} onClick={handleClick} disabled />,
    );
    const button = getByText("icon");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("should correctly handle hasInvert", () => {
    const { getByTestId } = render(
      <IconButton icon={<svg data-testid="svg-icon" />} hasInvert />,
    );
    const svgIcon = getByTestId("svg-icon");

    expect(svgIcon).toHaveStyle(`filter: ${NO_INVERT}`);
    expect(svgIcon).toHaveStyle(`--webkit-filter: ${NO_INVERT}`);
  });

  it("should correctly handle hasInvert (dark)", () => {
    const { getByTestId, rerender } = darkRender(
      <IconButton icon={<svg data-testid="svg-icon" />} hasInvert />,
    );
    const svgIcon = getByTestId("svg-icon");

    expect(svgIcon).toHaveStyle(`filter: ${FULL_INVERT}`);
    expect(svgIcon).toHaveStyle(`--webkit-filter: ${FULL_INVERT}`);

    rerender(
      <IconButton icon={<svg data-testid="svg-icon" />} hasInvert={false} />,
    );
    expect(svgIcon).toHaveStyle(`filter: ${NO_INVERT}`);
    expect(svgIcon).toHaveStyle(`--webkit-filter: ${NO_INVERT}`);
  });
});
