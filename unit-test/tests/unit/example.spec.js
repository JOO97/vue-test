import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg },
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('counter', () => {
  const wrapper = mount(HelloWorld)
  it('has a button', () => {
    expect(wrapper.find('.counter').exists()).toBe(true)
  })
})

describe('button:click', () => {
  it('click btn increments counter by 1', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.find('button').trigger('click')
    expect(wrapper.vm.counter).toBe(1)
  })
})
