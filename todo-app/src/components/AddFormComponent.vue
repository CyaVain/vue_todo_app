<template>
  <div class="container my-3">
    <form>
      <div class="mb-3">
        <label for="userId" class="form-label">User Id</label>
        <input type="number" class="form-control" id="userId" aria-describedby="userHelp" />
        <div id="userHelp" class="form-text">Insert User Id</div>
      </div>
      <div class="mb-3">
        <label for="taskInput" class="form-label">Task Title</label>
        <input type="text" class="form-control" id="taskInput" />
        <div id="taskHelp" class="form-text">Insert User's Task</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import ButtonComponent from './atoms/ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  }
}
</script>
