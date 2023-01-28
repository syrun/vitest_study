// 测试 app 组件的 h1 中是否包含 Hello Vitest
import App from '../App.vue'
import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

it('contain "Hello world"', () => {
  const renderApp = mount(App, {
    props: {
      msg: 'Hello Vitest'
    }
  })

  // renderApp.find() 查找组件中HTML元素
  // rend二App.text() 返回一个元素的文本 
  expect(renderApp.find('h1').text()).toContain('Hello Vitest')
})