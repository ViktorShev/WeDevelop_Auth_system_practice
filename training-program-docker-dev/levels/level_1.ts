import { text } from 'https://x.nest.land/deno-figlet@0.0.5/mod.js'

import { b, bg, log } from './helpers.ts'

// const fonts = [
//   'colossal',
//   'slant',
//   'jerusalem',
//   'thin',
//   'ivrit',
//   'standard',
//   'alligator2',
//   'o8',
//   'starwars'
// ]

export default async function level1 () {
  const welcome = await text('WELCOME!', 'jerusalem')

  log(bg(welcome))
  log(bg('Congratulations!'), b('You finished Level 0:'), 'installing and running Docker.')
  log('')
  log('')
  log(b('-> LEVEL 1:'), 'configuring an environment variable.')
  log('')
  log('- Take a look at the "docker-compose.yaml" file on this directory.')
  log('- Add an environment variable called "CURRENT_LEVEL" on the "tp-intro" service.')
  log('- Set its value to "./level_2.ts".')
  log('- Run "docker-compose up" again to advance to the next level!')
  log('')
}
