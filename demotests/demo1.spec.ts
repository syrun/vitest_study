import { describe, expect, it } from 'vitest'

function toUpperCase(str: string) {
  return str.toUpperCase() + '1'
}

describe('matchSnapshot', () => {
  it('toUpperCase', () => {
    const result = toUpperCase('foo')
    // 和之前缓存的快照进行对比，如果一样则测试通过
    // 如果不一样
    // 要么是函数输出被意外改动
    // 要么是快照版本需要更新（所有bug已被改完）
    expect(result).toMatchSnapshot()
  })
})