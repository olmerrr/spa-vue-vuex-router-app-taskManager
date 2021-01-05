<template>
  <div>
    <div v-if="task">
      <h2>{{ task.title }}</h2>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>
<script>
export default {
  name:'task',
  computed: {
    task() {
      // console.log(typeof this.$route.params.id);
      // параметры id приходят в виде строки, по этому нужен "+"
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>