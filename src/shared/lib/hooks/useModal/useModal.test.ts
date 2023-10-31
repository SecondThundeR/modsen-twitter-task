import { useModal } from "./useModal";
import { renderHook, act } from "~/testUtils";

describe("useModal", () => {
  it("should return isOpened as false by default", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpened).toBe(false);
  });

  it("should toggle isOpened when onOpen/onClose is called", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.isOpened).toBe(false);

    act(() => {
      result.current.handlers.onOpen();
    });

    expect(result.current.isOpened).toBe(true);

    act(() => {
      result.current.handlers.onClose();
    });

    expect(result.current.isOpened).toBe(false);
  });
});
