import { division, defaultDivision } from "./division";

describe("division", () => {
  describe("test division operations", () => {
    it("should divide 1 / 1 and return 0.", () => {
      const result = division(1, 1);

      expect(result).toEqual(1);
    });

    it("should divide 10 / 0 and return Invalid Expression. Impossible to divide by zero.", () => {
      const result = division(10, 0);

      expect(result).toEqual(
        "Invalid Expression. Impossible to divide by zero."
      );
    });

    it("should divide 0 / 5 and return 0.", () => {
      const result = division(0, 5);

      expect(result).toEqual(0);
    });

    it("should divide 12 / -6 and return -2.", () => {
      const result = division(12, -6);

      expect(result).toEqual(-2);
    });

    it("should divide 11721831923 / 976355381123 and return 0.01200570217.", () => {
      const result = division(11721831923, 976355381123);

      expect(result).toEqual(0.012005702175285392);
    });

    it("should divide 90 and return 9.", () => {
      const result = defaultDivision(90);

      expect(result).toEqual(0.9);
    });
  });
});
