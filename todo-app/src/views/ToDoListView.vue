<template>
  <div class="container">
    <h1 class="text-center">To Do list</h1>
    <div class="my-2">
      <h5>Show Task By Status</h5>
      <TaskButtonComponent
        @showAll="showAll"
        @showDone="showDone"
        @showOnProgress="showOnProgress"
      />
    </div>
    <div>
      <h3>Total {{ status }} Tasks : {{ this.ToDoList.length }}</h3>
    </div>
    <TableComponent
      :ToDoList="ToDoList"
      :paginatedList="paginatedList"
      :currentPage="currentPage"
      :pageSize="pageSize"
      @deleteRow="deleteRow"
      @updateRow="updateRow"
    />

    <PageCursorComponent
      :currentPage="currentPage"
      :totalPage="totalPage"
      @prevPage="prevPage"
      @nextPage="nextPage"
      @jumpPage="jumpPage"
    />
  </div>
</template>

<script>
import { ToDoList } from '../stores/ToDoData'
import TaskButtonComponent from '../components/moleculs/TaskButtonComponent.vue'
import TableComponent from '@/components/TableComponent.vue'
import PageCursorComponent from '@/components/moleculs/PageCursorComponent.vue'

export default {
  components: {
    TaskButtonComponent,
    TableComponent,
    PageCursorComponent
  },
  data() {
    return {
      ToDoList: [],
      pageSize: 10,
      currentPage: 1,
      totalPage: 0,
      status: 'All'
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
    async deleteRow(todo) {
      const index = this.ToDoList.findIndex((t) => t.id === todo.id)
      if (index !== -1) {
        this.ToDoList.splice(index, 1)
        alert('Task Deleted Successfully')
        this.getTotalPage()
      }
    },
    async updateRow(todo) {
      const index = this.ToDoList.findIndex((t) => t.id === todo.id)
      this.ToDoList[index].completed = true
      alert('Task Done')
      this.ToDoList = await ToDoList
      this.getTotalPage()
      this.status = 'All'
    },
    async showDone() {
      this.status = 'Done / Completed'
      this.ToDoList = await ToDoList
      this.ToDoList = this.ToDoList.filter((todo) => todo.completed === true)
      this.getTotalPage()
      this.currentPage = 1
    },
    async showOnProgress() {
      this.status = 'On Progress'
      this.ToDoList = await ToDoList
      this.ToDoList = this.ToDoList.filter((todo) => todo.completed === false)
      this.getTotalPage()
      this.currentPage = 1
    },
    async showAll() {
      this.status = 'All'
      this.ToDoList = await ToDoList
      this.getTotalPage()
      this.currentPage = 1
    }
  }
}
</script>
