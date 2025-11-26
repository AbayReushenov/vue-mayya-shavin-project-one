import { createApp, defineComponent, h, type ComponentOptions } from 'vue'

type Data = {
  counter: number
}

const App = defineComponent({
  data(): Data {
    return {
      counter: 0,
    }
  },
  render() {
    return h('div', `Counter: ${ (this as ComponentOptions).counter}`)
  },

// {Хук created} - вызывается после создания компонента и его DOM-элемента, но до монтирования  
  created() {
    const interval = setInterval(() => {
      (this as ComponentOptions).counter++
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
    }, 5000)
  },
})

const app = createApp(App)

app.mount('#app')
