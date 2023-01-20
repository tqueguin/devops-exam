const { isEmpty, isValid } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validations tests suites - isValid", () => {
    test("should return false as the gamertag has less than 8 characters", () => {
        const result = isValid("gamerZ");
        expect(result).toBe(false);
    });

    test("should return true as the gamertag is valid", () => {
        const result = isValid("supergamerZ@3");
        expect(result).toBe(true);
    });

    test("should return false as the gamertag doesn't have a special character", () => {
        const result = isValid("supergamerZ8");
        expect(result).toBe(false);
    });

    test("should return false as the gamertag doesn't have a number", () => {
        const result = isValid("supergamer@z");
        expect(result).toBe(false);
    });
});
