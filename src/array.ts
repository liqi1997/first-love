
export function head<T>(list: Array<T> | undefined): T | undefined {
    return Array.isArray(list) && list.length > 0 ? list[0] : undefined;
}

export function getElementByKeyValue<T>(list: Array<T> | undefined, key: string, value: unknown): T | undefined {
    if (!Array.isArray(list)) {
        return;
    }
    let res: T;
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item[key] === value) {
            res = item;
            break;
        }
    }
    return res;
}