import "jest-styled-components";

import { avatarPlaceholderPath } from "@/shared/constants/publicImagesPaths";

import { Avatar } from "./Avatar";
import { render } from "~/testUtils";

describe("Avatar", () => {
  it("should render correctly", () => {
    const { getByRole } = render(<Avatar />);
    const avatarImage = getByRole("img");
    expect(avatarImage).toBeInTheDocument();
  });

  it("should render the correct image", () => {
    const testSrc = "test-image.jpg";
    const { getByRole } = render(<Avatar src={testSrc} />);
    const avatarImage = getByRole("img");
    expect(avatarImage).toHaveAttribute("src", testSrc);
  });

  it("should render the placeholder image when no src is provided", () => {
    const { getByRole } = render(<Avatar />);
    const avatarImage = getByRole("img");
    expect(avatarImage).toHaveAttribute("src", avatarPlaceholderPath);
  });

  it("should render the correct dimensions", () => {
    const { getByRole } = render(<Avatar width={48} height={48} />);
    const avatarImage = getByRole("img");
    expect(avatarImage).toHaveStyleRule("width", "48px");
    expect(avatarImage).toHaveStyleRule("height", "48px");
  });
});
