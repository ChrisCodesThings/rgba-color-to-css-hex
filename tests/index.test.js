
const { default: testFunc } = await import("../");

describe("check for bad input", () => {
    test("nothing", async () => {
        expect(testFunc()).toBeUndefined();
    });

    test("boolean", async () => {
        expect(testFunc(true)).toBeUndefined();
    });

    test("a number", async () => {
        expect(testFunc(123)).toBeUndefined();
    });

    test("a string", async () => {
        expect(testFunc("foo")).toBeUndefined();
    });
});

describe("convert some rgba colours to hex", () => {
    test("black", () => {
        expect(testFunc([0, 0, 0, 1])).toEqual("#000"); // black
    });

    test("white", () => {
        expect(testFunc([255, 255, 255, 1])).toEqual("#fff"); // white
    });

    test("cornflowerblue no alpha", () => {
        expect(testFunc([100, 149, 237])).toEqual("#6495ed");
    });

    test("cornflowerblue with unnecessary alpha", () => {
        expect(testFunc([100, 149, 237, 1])).toEqual("#6495ed");
    });

    test("cornflowerblue with 50% transparency", () => {
        expect(testFunc([100, 149, 237, 0.5])).toEqual("#6495ed7f");
    });
});
