import { b, br, log } from './helpers.ts'

const CURRENT_LEVEL = Deno.env.get('CURRENT_LEVEL') ?? './level_1.ts'

;(async () => {
  const level = await tryImport(CURRENT_LEVEL)

  if (level) level()
  else {
    log('')
    log(br('ERROR: '), `You've set the "CURRENT_LEVEL" environment variable to an invalid value: "${CURRENT_LEVEL}"!`)
    log('')
    log(b('Please try again!'))
    log('')
  }
})()

async function tryImport (file: string) {
  try {
    return (await import(file))?.default
  } catch (_) {
    return null
  }
}
