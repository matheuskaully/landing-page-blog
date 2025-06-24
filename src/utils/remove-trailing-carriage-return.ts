export function removeTrailingCarriageReturn(str: string) {
  return str.endsWith('\r') ? str.slice(0, -1) : str
}
