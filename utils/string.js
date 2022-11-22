const rand = (len) => {
    return Math.random().toString(36).substring(2, len + 2);
}

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export { rand }