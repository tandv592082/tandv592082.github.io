export const noop = () => {}
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))