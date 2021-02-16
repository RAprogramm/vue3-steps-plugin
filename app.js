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
    setActive(i) {
      this.activeIndex = i
    },
    prev() {
      if (this.activeIndex !== 0) {
        this.activeIndex--
      }
    },
    reset() {
      this.isActiveStep = true
      this.activeIndex = 0
    },
    nextOfFinish() {
      if (this.activeIndex !== this.steps.length - 1) {
        this.activeIndex++
      } else {
        this.isActiveStep = false
      }
    }
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex]
    },
    isButtonDisabled() {
      return this.activeIndex === 0
    },
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
          >Back</button>
          <button class="btn primary" @click="nextOfFinish">
            {{ isLastStep ? 'Finish' : 'Next' }}
          </button>
        </div>
        <div v-else>
          <button class="btn" @click="reset">Start again</button>
        </div>
    </div>
  `
})

app.mount('#app')

