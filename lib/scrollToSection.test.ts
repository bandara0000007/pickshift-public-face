import { scrollToSection } from "./scrollToSection";

describe("scrollToSection", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = "";
  });

  it("calls scrollIntoView with smooth behavior on the matching element", () => {
    const target = document.createElement("div");
    target.id = "pricing";
    document.body.appendChild(target);
    const spy = jest.spyOn(target, "scrollIntoView").mockImplementation(() => {});

    scrollToSection("pricing");

    expect(spy).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("does nothing (does not throw) when the target id does not exist", () => {
    expect(() => scrollToSection("does-not-exist")).not.toThrow();
  });
});
