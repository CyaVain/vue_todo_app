<template>
  <div class="container my-2">
    <h1 class="text-center">Add New Task</h1>
    <AddFormComponent :ToDoList="ToDoList" @addTask="addTask" />
  </div>
</template>

<script>
import AddFormComponent from '@/components/AddFormComponent.vue'
import { ToDoList } from '../stores/ToDoData'

export default {
  components: {
    AddFormComponent
  },
  data() {
    return {
      ToDoList: []
    }
  },
  async created() {
    this.ToDoList = await ToDoList
  },
  methods: {
    addTask(newTask) {
      let taskId = 1
      if (this.ToDoList.length > 0) {
        taskId = this.ToDoList[this.ToDoList.length - 1].id + 1
      }
      newTask.id = taskId
      this.ToDoList.push(newTask)
      alert('Task Added Successfully')
      this.$router.push('/')
    }
  }
}
</script>
