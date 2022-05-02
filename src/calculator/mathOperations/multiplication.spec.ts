import { multiplication } from "./multiplication";

describe("multiplication", () => {
  describe("test multiplication operations", () => {
    it("should multiply 90 * 0 and return 0.", () => {
      const result = multiplication(90, 0);

      expect(result).toEqual(0);
    });

    it("should multiply 10 * 10 and return 100.", () => {
      const result = multiplication(10, 10);

      expect(result).toEqual(100);
    });

    it("should multiply 50 / -37 and return -1850.", () => {
      const result = multiplication(50, -37);

      expect(result).toEqual(-1850);
    });

    it("should multiply 117283 * 976312 and return 114504800296.", () => {
      const result = multiplication(117283, 976312);

      expect(result).toEqual(114504800296);
    });
  });
});
