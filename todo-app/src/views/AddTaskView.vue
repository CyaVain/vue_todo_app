<template>
  <div class="container my-2">
    <h1 class="text-center">Add New Task</h1>
    <AddFormComponent />
  </div>
</template>

<script>
import AddFormComponent from '@/components/AddFormComponent.vue'
export default {
  components: {
    AddFormComponent
  }
}
</script>
