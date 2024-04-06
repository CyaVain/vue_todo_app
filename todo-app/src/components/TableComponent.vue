<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Task Id</th>
          <th scope="col">User Id</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col" colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in paginatedList"
          :key="todo.id"
          :class="todo.completed ? 'table-success' : 'table-warning'"
        >
          <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
          <td>{{ todo.id }}</td>
          <td>{{ todo.userId }}</td>
          <td>{{ todo.title }}</td>
          <td v-if="todo.completed == true">Done</td>
          <td v-else>On Progress</td>
          <td v-if="todo.completed == false">
            <ButtonComponent
              :buttonClass="updateClass"
              :buttonName="updateName"
              @event-click="updateRow(todo)"
            />
          </td>
          <td v-else>
            <ButtonComponent hidden />
          </td>
          <td>
            <ButtonComponent
              :buttonClass="deleteClass"
              :buttonName="deleteName"
              @event-click="deleteRow(todo)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonComponent from './atoms/ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  },
  data() {
    return {
      deleteClass: 'btn btn-danger',
      deleteName: 'Delete Task',
      updateClass: 'btn btn-success',
      updateName: 'Done'
    }
  },
  props: {
    ToDoList: {
      type: Array,
      required: true
    },
    paginatedList: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    }
  },
  methods: {
    deleteRow(todo) {
      this.$emit('deleteRow', todo)
    },
    updateRow(todo) {
      this.$emit('updateRow', todo)
    }
  }
}
</script>
