<template>
  <nav class="nav">
      <router-link to="/" class="brand-logo">TasksManager</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link to="/" tag="li" exact active-class="active"
          ><a href="#">Create</a>
        </router-link>
        <router-link to="/list" tag="li" active-class="active"
          ><a href="#">List</a>
        </router-link>
      </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  text-align: left;
  }
.brand-logo{
  left: 15px;
}
</style>