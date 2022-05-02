import { isInputInvalid } from "./validator";

describe("validator", () => {
  describe("test isInputInvalid method", () => {
    it("should return false for 1+1 input.", () => {
      const result = isInputInvalid("1+1");

      expect(result).toBe(false);
    });

    it("should return false for *3 input.", () => {
      const result = isInputInvalid("*3");

      expect(result).toBe(false);
    });

    it("should return true for 1++1 input.", () => {
      const result = isInputInvalid("1++1");

      expect(result).toBe(true);
    });

    it("should return true for 1234 input.", () => {
      const result = isInputInvalid("1234");

      expect(result).toBe(true);
    });

    it("should return false for 2+!2 input.", () => {
      const result = isInputInvalid("2+!2");

      expect(result).toBe(false);
    });

    it("should return true for 2+!!2 input.", () => {
      const result = isInputInvalid("2+!!2");

      expect(result).toBe(true);
    });

    it("should return true for 2+2+ input.", () => {
      const result = isInputInvalid("2+2+");

      expect(result).toBe(true);
    });
  });
});
