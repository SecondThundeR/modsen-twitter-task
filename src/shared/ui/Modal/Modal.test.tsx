import { Modal } from "./Modal";
import { render, fireEvent } from "~/testUtils";

describe("Modal", () => {
  const title = "Test Modal";
  const closeModal = jest.fn();

  it("should render the title and children", () => {
    const children = <div>Test Children</div>;
    const { getByText } = render(
      <Modal title={title} closeModal={closeModal}>
        {children}
      </Modal>,
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText("Test Children")).toBeInTheDocument();
  });

  it("calls the closeModal function when the close button is clicked", () => {
    const children = <div>Test Children</div>;
    const { getByTestId } = render(
      <Modal title={title} closeModal={closeModal}>
        {children}
      </Modal>,
    );
    const modalContainer = getByTestId("modal-container");
    const modalContent = getByTestId("modal-content");

    fireEvent.click(modalContent);
    expect(closeModal).not.toHaveBeenCalled();
    fireEvent.click(modalContainer);
    expect(closeModal).toHaveBeenCalled();
  });
});
