/**
 * This will be run by the `ask-pass-trampoline`.
 */
 /* Editing the main.ts in check branch*/

import { responseForPrompt } from './ask-pass'

const prompt = process.argv[2]
responseForPrompt(prompt).then(response => {
  if (response) {
    process.stdout.write(response)
    process.stdout.end()
  }
})
