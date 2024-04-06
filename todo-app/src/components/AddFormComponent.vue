<template>
  <div class="container my-3">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="userId" class="form-label">User Id</label>
        <input
          type="number"
          required
          class="form-control"
          id="userId"
          v-model="userId"
          aria-describedby="userHelp"
        />
        <div id="userHelp" class="form-text">Insert User Id</div>
      </div>
      <div class="mb-3">
        <label for="taskInput" class="form-label">Task Title</label>
        <input type="text" required class="form-control" id="taskInput" v-model="taskTitle" />
        <div id="taskHelp" class="form-text">Insert User's Task</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    ToDoList: [{}]
  },
  data() {
    return {
      userId: '',
      taskTitle: ''
    }
  },
  methods: {
    submitForm() {
      const taskId = this.ToDoList.length ? this.ToDoList[this.ToDoList.length - 1].id + 1 : 1
      const newTask = {
        id: taskId,
        userId: this.userId,
        title: this.taskTitle,
        completed: false
      }

      this.$emit('addTask', newTask)

      this.userId = ''
      this.taskTitle = ''
    }
  }
}
</script>
