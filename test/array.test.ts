import { getElementByKeyValue, head } from "../src"

test("Array's head element is ", () => {
    expect(head(null)).toBeUndefined();
    expect(head(undefined)).toBeUndefined();
    expect(head([])).toBeUndefined();
    expect(head([1, 2, 3])).toBe(1);
    const list = [{
        name: 1,
    }, {
        name: 2
    }]
    expect(head(list)).toBe(list[0]);
})

test("Find element by key value ", () => {
    expect(getElementByKeyValue(null, 'name', 'liqi')).toBeUndefined();
    expect(getElementByKeyValue(undefined, 'name', 'liqi')).toBeUndefined();
    expect(getElementByKeyValue([], 'name', 'liqi')).toBeUndefined();
    expect(getElementByKeyValue([{ name: 'lq', age: 24 }], 'name', 'liqi')).toBeUndefined();

    const res = getElementByKeyValue([{ name: 'liqi', age: 24 }], 'name', 'liqi');
    expect(res.age).toBe(24)
})