<template>
  <div>
    <h2>List</h2>
    <hr />
    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(task, idx) of tasks" :key="task.id">
          <td>{{ idx + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ task.date }}</td>
          <td>
            <div>{{ task.description }}</div>
          </td>
          <td>{{ task.status }}</td>
          <td>
            <router-link
              tag="button"
              class="btn btn-small"
              :to="'/task' + task.id"
            >
              Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <table v-else>
      On this moment you don't have tasks
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>