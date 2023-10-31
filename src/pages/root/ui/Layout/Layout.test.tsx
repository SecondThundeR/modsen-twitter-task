import {
  DISPLAY_MAP,
  FLEX_PROPERTIES,
  IMAGE_PROPERTIES,
} from "@/shared/constants/generalStyles";
import { rootBackgroundPath } from "@/shared/constants/publicImagesPaths";
import {
  DIMENSIONS_MAP,
  GAP_MAP,
  MARGIN_MAP,
  PADDING_MAP,
} from "@/shared/constants/sizing";

import { Layout } from "./Layout";
import { render } from "~/testUtils";

describe("Layout component", () => {
  it("should render children", () => {
    const { getByText } = render(
      <Layout footerElementsSlot={<>Footer data</>}>
        <div>Test child component</div>
      </Layout>,
    );
    expect(getByText("Test child component")).toBeInTheDocument();
    expect(getByText("Footer data")).toBeInTheDocument();
  });

  it("should have correct styles", () => {
    const { getByTestId } = render(
      <Layout footerElementsSlot={<>Footer data</>}>
        <div>Test child component</div>
      </Layout>,
    );

    const root = getByTestId("root");
    expect(root).toHaveStyleRule("height", DIMENSIONS_MAP.fullScreen);
    expect(root).toHaveStyleRule("display", DISPLAY_MAP.grid);
    expect(root).toHaveStyleRule("grid-template-rows", "1fr auto");

    const wrapper = getByTestId("wrapper");
    expect(wrapper).toHaveStyleRule("display", DISPLAY_MAP.grid);
    expect(wrapper).toHaveStyleRule("grid-template-columns", "1fr auto");
    expect(wrapper).toHaveStyleRule("height", DIMENSIONS_MAP.full);

    const rootImage = getByTestId("root-image");
    expect(rootImage).toHaveStyleRule(
      "background-image",
      `url(${rootBackgroundPath})`,
    );
    expect(rootImage).toHaveStyleRule(
      "background-position",
      IMAGE_PROPERTIES.position,
    );
    expect(rootImage).toHaveStyleRule(
      "background-repeat",
      IMAGE_PROPERTIES.repeat,
    );
    expect(rootImage).toHaveStyleRule("background-clip", IMAGE_PROPERTIES.clip);
    expect(rootImage).toHaveStyleRule("background-size", IMAGE_PROPERTIES.size);

    const contentWrapper = getByTestId("content-wrapper");
    expect(contentWrapper).toHaveStyleRule("display", DISPLAY_MAP.flex);
    expect(contentWrapper).toHaveStyleRule(
      "flex-direction",
      FLEX_PROPERTIES.column,
    );
    expect(contentWrapper).toHaveStyleRule(
      "justify-content",
      FLEX_PROPERTIES.justifyCenter,
    );
    expect(contentWrapper).toHaveStyleRule(
      "padding",
      PADDING_MAP.contentWrapper.regular,
    );
    expect(contentWrapper).toHaveStyleRule("gap", GAP_MAP.large);

    const footer = getByTestId("footer");
    expect(footer).toHaveStyleRule("padding", PADDING_MAP.footer);
    expect(footer).toHaveStyleRule("margin", MARGIN_MAP.footer);
    expect(footer).toHaveStyleRule("display", DISPLAY_MAP.flex);
    expect(footer).toHaveStyleRule(
      "justify-content",
      FLEX_PROPERTIES.justifyCenter,
    );
    expect(footer).toHaveStyleRule("align-items", FLEX_PROPERTIES.alignCenter);
    expect(footer).toHaveStyleRule("gap", GAP_MAP.semiLarge);
    expect(footer).toHaveStyleRule("flex-wrap", FLEX_PROPERTIES.wrap);
  });
});
