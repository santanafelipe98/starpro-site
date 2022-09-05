export function required(value) {
    return value ? undefined : 'form_validations.required'
}

export function isPhone(value) {
    if (!value)
        return value

    const regex = /^(\(\d{2}\) \d{4,5}-\d{4})$/i

    return regex.test(value) ? undefined : 'form_validations.phone_invalid'
}

export function isEmail(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'form_validations.email_invalid'
        : undefined
}