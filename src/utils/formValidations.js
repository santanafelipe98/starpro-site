export function required(value) {
    return value ? undefined : 'Campo obrigatório*'
}

export function isPhone(value) {
    const regex = /^(\(\d{2}\) \d{4,5}-\d{4})$/i

    return regex.test(value) ? undefined : 'Inválido'
}

export function isEmail(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'E-mail inválido'
        : undefined
}