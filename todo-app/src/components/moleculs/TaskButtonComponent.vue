<template>
  <div>
    <div>
      <ButtonComponent :buttonName="showName" :buttonClass="showClass" @event-click="showAll" />
      <ButtonComponent :buttonName="doneName" :buttonClass="doneClass" @event-click="showDone" />
      <ButtonComponent
        :buttonName="progressName"
        :buttonClass="progressClass"
        @event-click="showOnProgress"
      />
    </div>
  </div>
</template>

<script>
import ButtonComponent from '../atoms/ButtonComponent.vue'

export default {
  components: {
    ButtonComponent
  },
  data() {
    return {
      showName: 'Show All',
      showClass: 'btn btn-info',
      doneName: 'Done',
      doneClass: 'btn btn-success mx-3',
      progressName: 'On Progress',
      progressClass: 'btn btn-warning'
    }
  },
  methods: {
    showAll() {
      this.$emit('showAll')
    },
    showDone() {
      this.$emit('showDone')
    },
    showOnProgress() {
      this.$emit('showOnProgress')
    }
  }
}
</script>
