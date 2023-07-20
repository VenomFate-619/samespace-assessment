export function mergeClassName(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
