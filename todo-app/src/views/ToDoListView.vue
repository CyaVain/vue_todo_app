<template>
  <div class="container">
    <h1>This Is Task List</h1>
    <div>
      <h5>Show Task By Status</h5>
      <button class="btn btn-info" @click="showAll()">Show All</button>
      <button class="btn btn-success mx-3" @click="showDone()">Done</button>
      <button class="btn btn-warning" @click="showOnProgress()">On Progress</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Task Id</th>
          <th scope="col">User Id</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
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
        </tr>
      </tbody>
    </table>
    <div class="page-cursor">
      <button v-if="currentPage == 1" class="btn btn-primary mx-3" disabled>Previous</button>
      <button v-else class="btn btn-primary mx-3" @click="prevPage()">Previous</button>

      <button class="btn btn-primary mx-3" @click="jumpPage(1)">First Page</button>
      <button class="btn btn-primary mx-3" @click="jumpPage(totalPage)">Last Page</button>

      <button v-if="currentPage == totalPage" class="btn btn-primary mx-3" disabled>
        Next Page
      </button>
      <button v-else class="btn btn-primary mx-3" @click="nextPage()">Next</button>
    </div>
  </div>
</template>

<script>
import { ToDoList } from '../stores/ToDoData'

export default {
  data() {
    return {
      ToDoList: [],
      pageSize: 10,
      currentPage: 1,
      totalPage: 0
    }
  },
  computed: {
    paginatedList() {
      if (this.ToDoList.length === 0) {
        return []
      }
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = Math.min(startIndex + this.pageSize - 1, this.ToDoList.length - 1)
      return this.ToDoList.slice(startIndex, endIndex + 1)
    }
  },
  async mounted() {
    this.ToDoList = await ToDoList
    this.getTotalPage()
  },
  methods: {
    paginate(pageNumber) {
      this.currentPage = pageNumber
    },
    getTotalPage() {
      this.totalPage = Math.ceil(this.ToDoList.length / this.pageSize)
    },
    prevPage() {
      this.currentPage -= 1
    },
    nextPage() {
      this.currentPage += 1
    },
    jumpPage(page) {
      this.currentPage = page
    },
    async showDone() {
      this.ToDoList = await ToDoList
      this.ToDoList = this.ToDoList.filter((todo) => todo.completed === true)
      this.getTotalPage()
      this.currentPage = 1
    },
    async showOnProgress() {
      this.ToDoList = await ToDoList
      this.ToDoList = this.ToDoList.filter((todo) => todo.completed === false)
      this.getTotalPage()
      this.currentPage = 1
    },
    async showAll() {
      this.ToDoList = await ToDoList
      this.getTotalPage()
      this.currentPage = 1
    }
  }
}
</script>

<style scoped></style>
