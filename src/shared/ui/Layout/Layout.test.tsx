import { Layout } from "./Layout";
import { render } from "~/testUtils";

describe("Layout", () => {
  const navSlot = <div>Nav child</div>;
  const sidebarSlot = <div>Sidebar child</div>;
  const testOutlet = <div>Outlet child</div>;

  it("should render outlet", () => {
    const { getByText } = render(<Layout outletSlot={testOutlet} />);
    expect(getByText("Outlet child")).toBeInTheDocument();
  });

  it("should render navSlot", () => {
    const { getByText } = render(
      <Layout outletSlot={testOutlet} navSlot={navSlot} />,
    );
    expect(getByText("Nav child")).toBeInTheDocument();
  });

  it("should render sidebarSlot", () => {
    const { getByText } = render(
      <Layout outletSlot={testOutlet} sidebarSlot={sidebarSlot} />,
    );
    expect(getByText("Sidebar child")).toBeInTheDocument();
  });
});
