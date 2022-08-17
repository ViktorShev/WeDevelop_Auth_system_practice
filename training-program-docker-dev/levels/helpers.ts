import {
  bold as b,
  green as g,
  red as r,
  yellow as y,
  underline as u
} from 'https://deno.land/std@0.85.0/fmt/colors.ts'

export { b, g, r, y, u }

export function bg (str: string) {
  return b(g(str))
}

export function br (str: string) {
  return b(r(str))
}

export function buy (str: string) {
  return b(u(y(str)))
}

export function log (...args: any[]) {
  const last = args.pop()

  if (typeof last === 'function') {
    last(...args)
  } else {
    console.log(...args, last)
  }
}

export function sleep (timeInMillis: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve(''), timeInMillis)
  })
}
