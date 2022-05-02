import { subtraction } from "./subtraction";

describe("subtraction", () => {
  describe("test subtraction operations", () => {
    it("should subtract 0 - 14 and return -14.", () => {
      const result = subtraction(0, 14);

      expect(result).toEqual(-14);
    });

    it("should subtract 1 - 1 and return 0.", () => {
      const result = subtraction(1, 1);

      expect(result).toEqual(0);
    });

    it("should subtract 146 - -178 and return 324.", () => {
      const result = subtraction(146, -178);

      expect(result).toEqual(324);
    });

    it("should subtract -12 - -17 and return -5.", () => {
      const result = subtraction(-12, -17);

      expect(result).toEqual(5);
    });

    it("should subtract 11721831923 - 976355381123 and return -964633549200.", () => {
      const result = subtraction(11721831923, 976355381123);

      expect(result).toEqual(-964633549200);
    });
  });
});
