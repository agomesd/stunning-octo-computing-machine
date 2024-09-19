import { describe, expect, test } from "vitest";
import { sumNumbers } from "../helper-functions";

describe("helper functions", () => {
  describe("sumNumbers", () => {
    test("should return the sum of two numbers", () => {
      const result = sumNumbers(1, 2);
      expect(result).toBe(3);
    });
  });
});
