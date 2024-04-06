<template>
  <div class="page-cursor">
    <ButtonComponent
      v-if="currentPage == 1"
      :buttonName="prev"
      :buttonClass="btnClass"
      :disabled="true"
    />
    <ButtonComponent v-else :buttonName="prev" :buttonClass="btnClass" @event-click="prevPage" />

    <ButtonComponent :buttonName="first" :buttonClass="btnClass" @event-click="jumpPage(1)" />
    <ButtonComponent
      :buttonName="last"
      :buttonClass="btnClass"
      @event-click="jumpPage(totalPage)"
    />

    <ButtonComponent
      v-if="currentPage == totalPage"
      :buttonName="next"
      :buttonClass="btnClass"
      :disabled="true"
    />
    <ButtonComponent v-else :buttonName="next" :buttonClass="btnClass" @event-click="nextPage" />
  </div>
</template>

<script>
import ButtonComponent from '../atoms/ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  },
  props: {
    currentPage: {
      type: Number
    },
    totalPage: {
      type: Number
    }
  },
  data() {
    return {
      prev: 'Previous',
      btnClass: 'btn btn-primary mx-3',
      first: 'First Page',
      last: 'Last Page',
      next: 'Next'
    }
  },
  methods: {
    prevPage() {
      this.$emit('prevPage')
    },
    nextPage() {
      this.$emit('nextPage')
    },
    jumpPage(page) {
      this.$emit('jumpPage', page)
    }
  }
}
</script>
