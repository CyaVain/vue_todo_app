<template>
  <div class="navbar justify-content-center">
    <header>
      <nav>
        <h2>ToDo Apps by Kevin Octavianus Halim</h2>
        <router-link to="/">
          <img src="./assets/img/home.png" class="mx-2" alt="HalamanUtama" />Halaman
          Utama</router-link
        >
        <router-link to="/add">
          <img src="./assets/img/addItem.png" class="mx-2" alt="AddData" />Add List</router-link
        >
      </nav>
    </header>
  </div>
  <body>
    <router-view />
  </body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav img {
  height: 1.5em; /* Adjust the value as needed */
}

* {
  background-color: #f8f9fa;
  color: #333;
}
</style>
