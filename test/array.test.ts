import { head } from "../src"

test("an array's head element is ", () => {
    expect(head([])).toBeUndefined();
    expect(head([1, 2, 3])).toBe(1);
    const list = [{
        name: 1,
    }, {
        name: 2
    }]
    expect(head(list)).toBe(list[0]);
})