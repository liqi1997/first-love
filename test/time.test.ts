import { getDateTime } from "../src";

test('Current date time is ', () => {
    const obj = getDateTime();
    expect(obj.year).toBeGreaterThanOrEqual(2021);
    expect(obj.month).toBeGreaterThanOrEqual(1);
    expect(obj.month).toBeLessThanOrEqual(12);
});