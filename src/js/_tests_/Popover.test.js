import Popover from "../Popover";

test("Popover factory creation", () => {
  const popoverFactory = new Popover();

  expect(popoverFactory._popovers).toEqual([]);
});
