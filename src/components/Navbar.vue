<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">TasksMeneger</router-link>
     
      <ul class="right hide-on-med-and-down">
        <router-link to="/" tag="li" exact active-class="active"
          ><a href="#">Create</a>
        </router-link>
        <router-link to="/list" tag="li" active-class="active"
          ><a href="#">List</a>
        </router-link>
        <router-link to="/task" tag="li" active-class="active"
          ><a href="#">Task</a>
        </router-link>
      </ul>
    
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.nav-wrapper {
  padding: 0 2rem;
}
</style>