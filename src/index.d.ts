// array
export function head<T>(list: Array<T> | undefined): T | undefined
export function getElementByKeyValue<T>(list: Array<T> | undefined, key: string, value: unknown): T | undefined

// password
export function passwordValidator(password: string): boolean

// time
export interface DateTime {
    year: number;
    month: number
}
export function getDateTime(): DateTime