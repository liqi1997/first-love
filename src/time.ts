interface DateTime {
    year: number;
    month: number
}

export function getDateTime(): DateTime {
    const now = new Date();
    return {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
    }
}