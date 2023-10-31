import { TextButton } from "./TextButton";
import { render, fireEvent } from "~/testUtils";

describe("TextButton", () => {
  const text = "Example Text";

  it("should render the text", () => {
    const { getByText } = render(<TextButton text={text} />);
    const button = getByText(text);
    expect(button).toBeInTheDocument();
  });

  it("should handle onClick correctly", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <TextButton text={text} onClick={onClickMock} />,
    );
    const button = getByText(text);

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should handle disabled state correctly", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <TextButton text={text} onClick={onClickMock} disabled />,
    );
    const button = getByText(text);

    fireEvent.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("should render alignment correctly", () => {
    const { getByText, rerender } = render(<TextButton text={text} />);
    const link = getByText(text);
    expect(link).toHaveStyleRule("text-align", "left");

    rerender(<TextButton text={text} alignment="center" />);
    expect(link).toHaveStyleRule("text-align", "center");

    rerender(<TextButton text={text} alignment="right" />);
    expect(link).toHaveStyleRule("text-align", "right");
  });
});
