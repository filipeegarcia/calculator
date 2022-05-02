import { addition } from "./addition";

describe("addition", () => {
  describe("test addition operations", () => {
    it("should sum 1 + 1 and return 2.", () => {
      const result = addition(1, 1);

      expect(result).toEqual(2);
    });

    it("should sum 1 + 1 and return 2.", () => {
      const result = addition(1, 1);

      expect(result).toEqual(2);
    });

    it("should sum 0 + 0 and return 0.", () => {
      const result = addition(0, 0);

      expect(result).toEqual(0);
    });

    it("should sum 12 + -17 and return -5.", () => {
      const result = addition(12, -17);

      expect(result).toEqual(-5);
    });

    it("should sum -15 + -20 and return -35.", () => {
      const result = addition(-15, -20);

      expect(result).toEqual(-35);
    });

    it("should sum 7 + 0 and return 7.", () => {
      const result = addition(7, 0);

      expect(result).toEqual(7);
    });

    it("should sum 11721831923 + 976355381123 and return 988077213046.", () => {
      const result = addition(11721831923, 976355381123);

      expect(result).toEqual(988077213046);
    });
  });
});
