<template>
  <div class="navbar justify-content-center">
    <header>
      <nav>
        <h2>ToDo Apps by Kevin Octavianus Halim</h2>
        <router-link to="/">
          <img src="./assets/home.png" class="mx-2" alt="HalamanUtama" />Halaman Utama</router-link
        >
        <router-link to="/todos">
          <img src="./assets/addItem.png" class="mx-2" alt="AddData" />To Do List</router-link
        >
        <router-link to="/add">
          <img src="./assets/addItem.png" class="mx-2" alt="AddData" />Add List</router-link
        >
        <router-link to="/update">
          <img src="./assets/addItem.png" class="mx-2" alt="AddData" />Delete List</router-link
        >
        <router-link to="/delete">
          <img src="./assets/addItem.png" class="mx-2" alt="AddData" />Delete List</router-link
        >
      </nav>
    </header>
  </div>
  <body>
    <router-view />
  </body>
</template>
