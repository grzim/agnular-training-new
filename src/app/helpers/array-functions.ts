export function unique(arr) {
    arr.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], [])
}