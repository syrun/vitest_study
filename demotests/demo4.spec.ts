import { beforeEach, describe, it } from 'vitest'

beforeEach(async (context) => {
  context['foo'] = 'bar'
})

describe('it shoule work', () => {
  it('ctx', ({ foo }) => {
    console.log(foo)
  })
})