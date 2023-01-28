// 模拟对象
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

function fn() {
  const hour = new Date().getHours()
  if (hour < 12) {
    return 'success'
  } else {
    return 'error'
  }
}

describe('a test about past and future time', () => {
  beforeEach(() => {
    // 模拟时间
    vi.useFakeTimers()
  })

  afterEach(() => {
    // 恢复正常的时间
    vi.useRealTimers()
  })

  it('no businessTime', () => {
    const data = new Date(2023, 1, 1, 9)
    vi.setSystemTime(data)

    // 通过上面的方法，下面调用所有的 new Date() 返回的都是 data 的时间
    expect(fn()).toBe('success')
  })
  
  it('no businessTime', () => {
    const data = new Date(2023, 1, 1, 13)
    vi.setSystemTime(data)

    // 通过上面的方法，下面调用所有的 new Date() 返回的都是 data 的时间
    expect(fn()).toBe('error')
  })
})