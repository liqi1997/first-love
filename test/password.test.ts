import { passwordValidator } from "../src";

test('validate password', () => {
    expect(passwordValidator('123')).toBe(false);
    expect(passwordValidator('abc')).toBe(false);
    expect(passwordValidator('ABC')).toBe(false);
    expect(passwordValidator('!@#')).toBe(false);
    expect(passwordValidator('123abcABC!@#')).toBe(true);
});