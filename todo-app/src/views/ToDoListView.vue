<template>
  <div class="container">
    <h1>This Is About View</h1>
    <div v-for="(todo, index) in paginatedList" :key="todo.id">
      <ol>
        <li>No. {{ index + 1 }}</li>
        <li>Id: {{ todo.id }}</li>
        <li>User Id: {{ todo.userId }}</li>
        <li>Title: {{ todo.title }}</li>

        <li v-if="todo.completed == true">Status: Done</li>
        <li v-else>Status: Not Done</li>
      </ol>
    </div>
    <div class="page-cursor">
      <button v-if="currentPage == 1" class="btn btn-primary mx-3" disabled>Previous Page</button>
      <button v-else class="btn btn-primary mx-3" @click="prevPage()">Previous Page</button>

      <button v-if="currentPage == totalPage" class="btn btn-primary mx-3" disabled>
        Next Page
      </button>
      <button v-else class="btn btn-primary mx-3" @click="nextPage()">Next Page</button>
    </div>
  </div>
</template>

<script>
import { ToDoList } from '../stores/ToDoData'

export default {
  data() {
    return {
      ToDoList: [{}],
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
    }
  }
}
</script>
