import { ImagesGrid } from "./ImagesGrid";
import { render } from "~/testUtils";

describe("ImagesGrid", () => {
  it("should render null when imageURLs is undefined", () => {
    const { container } = render(<ImagesGrid />);
    expect(container.firstChild).toBeNull();
  });

  it("should render null when imageURLs is an empty array", () => {
    const { container } = render(<ImagesGrid imageURLs={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("should render a grid with one row and three images when imageURLs has three elements", () => {
    const imageURLs = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
    ];
    const { container } = render(<ImagesGrid imageURLs={imageURLs} />);
    const rows = container.querySelectorAll("[data-testid='row']");
    expect(rows.length).toBe(1);
    const images = container.querySelectorAll("[data-testid='image']");
    expect(images.length).toBe(3);
  });

  it("should render a grid with two rows and six images when imageURLs has six elements", () => {
    const imageURLs = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
      "https://example.com/image4.jpg",
      "https://example.com/image5.jpg",
      "https://example.com/image6.jpg",
    ];
    const { container } = render(<ImagesGrid imageURLs={imageURLs} />);
    const rows = container.querySelectorAll("[data-testid='row']");
    expect(rows.length).toBe(2);
    const images = container.querySelectorAll("[data-testid='image']");
    expect(images.length).toBe(6);
  });

  it("should render a grid with two rows and six images when imageURLs has more than six elements", () => {
    const imageURLs = [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
      "https://example.com/image4.jpg",
      "https://example.com/image5.jpg",
      "https://example.com/image6.jpg",
      "https://example.com/image7.jpg",
      "https://example.com/image8.jpg",
    ];
    const { container } = render(<ImagesGrid imageURLs={imageURLs} />);
    const rows = container.querySelectorAll("[data-testid='row']");
    expect(rows.length).toBe(2);
    const images = container.querySelectorAll("[data-testid='image']");
    expect(images.length).toBe(6);
  });
});
