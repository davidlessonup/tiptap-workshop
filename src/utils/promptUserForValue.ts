export function promptUserForValue(message: string, defaultValue?: string) {
  return window.prompt(message, defaultValue);
}
