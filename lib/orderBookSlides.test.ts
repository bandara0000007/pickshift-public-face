import { orderBookSlides } from "./orderBookSlides";

describe("orderBookSlides", () => {
  it("has exactly 4 slides", () => {
    expect(orderBookSlides).toHaveLength(4);
  });

  it("gives every slide exactly 3 workers and 3 requirement strings", () => {
    orderBookSlides.forEach((slide) => {
      expect(slide.workers).toHaveLength(3);
      expect(slide.req1).toBeTruthy();
      expect(slide.req2).toBeTruthy();
      expect(slide.req3).toBeTruthy();
      expect(slide.image).toMatch(/^https:\/\/images\.unsplash\.com\//);
    });
  });

  it("gives every worker a face image, name, cred, and numeric score", () => {
    orderBookSlides.forEach((slide) => {
      slide.workers.forEach((worker) => {
        expect(worker.name).toBeTruthy();
        expect(worker.cred).toBeTruthy();
        expect(worker.face).toMatch(/^https:\/\/images\.unsplash\.com\//);
        expect(typeof worker.score).toBe("number");
      });
    });
  });
});
