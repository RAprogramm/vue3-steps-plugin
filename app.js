const app = Vue.createApp({
  data() {
    return {
      isActiveStep: true,
      activeIndex: 0,
      title: 'Vue3 learning plan',
      steps: [
        {title: 'Basic', text: 'Text of basic step'},
        {title: 'Components', text: 'Text of component step'},
        {title: 'Router', text: 'Text of router step'},
        {title: 'Vuex', text: 'Text of Vuex step'},
        {title: 'Composition', text: 'Text of composition step'}
      ]
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex !== 0) {
        this.activeIndex--
      }
    },
    reset() {
      // начать заного
      this.isActiveStep = true
      this.activeIndex = 0
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      if (this.activeIndex !== this.steps.length - 1) {
        this.activeIndex++
      } else {
        this.isActiveStep = false
      }
    },
    setActive(i) {
      // когда нажимаем на определенный шаг
      this.activeIndex = i
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    activeStep() {
      return this.steps[this.activeIndex]
    },
    // 2. выключена ли кнопка назад
    isButtonDisabled() {
      return this.activeIndex === 0
    },
    // 3. находимся ли мы на последнем шаге
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    }
  },
  template: `
    <div class="card">
      <h1>{{title}}</h1>
      <div class="steps">
        <div class="steps-content">{{activeStep.text}}</div>
        <ul class="steps-list">
          <li
            class="steps-item"
            v-for="(step, i) in steps"
            :class="{
              active: i === activeIndex,
              done: i < activeIndex
            }"
          ><span @click="setActive(i)">{{i + 1}}</span>{{step.title}}</li>
        </ul>
      </div>
        <div v-if="isActiveStep">
          <button
            :disabled="isButtonDisabled"
            class="btn"
            @click="prev"
          >Назад</button>
          <button class="btn primary" @click="nextOfFinish">
            {{ isLastStep ? 'Закончить' : 'Вперед' }}
          </button>
        </div>
        <div v-else>
          <button class="btn" @click="reset">Начать заново</button>
        </div>
    </div>
  `
})

app.mount('#app')

