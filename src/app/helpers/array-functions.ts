export function unique(arr) {
    return arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
}