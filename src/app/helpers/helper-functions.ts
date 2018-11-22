export const getProp = (props, obj) => props.reduce((acc, prop) => acc[prop], obj);
export const getValuesOf = obj =>
    (Object.keys(obj).map(key => (typeof obj[key] === "object") ? getValuesOf(obj[key]) : obj[key]) as any).flat();
