import { Image } from "./Image";
import { render, fireEvent } from "~/testUtils";

describe("Image", () => {
  const src = "https://example.com/image.jpg";
  const buttonText = "Click me";
  const onClick = jest.fn();

  it("should render the image with the given src", () => {
    const { getByRole } = render(<Image src={src} />);
    const image = getByRole("img");
    expect(image).toHaveAttribute("src", src);
  });

  it("should render the button with the given text and calls onClick when clicked", () => {
    const { getByRole } = render(
      <Image src={src} buttonText={buttonText} onClick={onClick} />,
    );
    const button = getByRole("button", { name: buttonText });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  it("should disable the button when isButtonDisabled is true", () => {
    const { getByText } = render(
      <Image
        src={src}
        buttonText={buttonText}
        onClick={onClick}
        isButtonDisabled
      />,
    );
    const button = getByText(buttonText);
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should render default text when buttonText is not passed", () => {
    const { getByText } = render(<Image src={src} onClick={onClick} />);
    const button = getByText("Button");

    expect(button).toBeInTheDocument();
  });

  it("should not render anything when src is not provided", () => {
    const { queryByRole } = render(<Image />);
    expect(queryByRole("img")).not.toBeInTheDocument();
    expect(queryByRole("button")).not.toBeInTheDocument();
  });
});
