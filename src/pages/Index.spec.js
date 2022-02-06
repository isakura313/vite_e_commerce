import { mount } from '@vue/test-utils'
import Index from './Index.vue'

describe('Компонент Counter', () => {
    // Теперь монтируем компонент и получаем wrapper
    const wrapper = mount(Index)
  
    it('отображает корректную разметку', () => {
      expect(wrapper.html()).toContain('<h1>Главная страница</span>')
    })
  
    // также легко проверить наличие других элементов

  })