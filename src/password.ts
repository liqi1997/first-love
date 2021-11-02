export function passwordValidator(password: string): boolean {

    return /[0-9]+/.test(password) &&
        /[a-z]+/.test(password) &&
        /[A-Z]+/.test(password) &&
        /[!@#$%^&*()\\|=+\-{}.?/,><;:_~]+/.test(password);

}