import { describe, expect, it } from 'vitest'

describe('timeouts', () => {
  it('name', async () => {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => { 
        resolve('zs')
      }, 1000)
    })
    expect(result).toBe('zs')
  }, 1000)
})