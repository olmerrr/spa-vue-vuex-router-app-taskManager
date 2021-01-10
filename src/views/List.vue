<template>
  <div>
    <h2>List</h2>
    <div class="row">
      <div class="input-field col s6">
        <select ref="select">
          <option value="" disabled selected>Choose your option</option>
          <option value="active">Active</option>
          <option value="outdated">Outdated</option>
          <option value="complited">Complited</option>
        </select>
        <label>Status Filter</label>
      </div>
    </div>

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
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td class="custom-td">
            <div class="text">{{ task.description }}</div>
          </td>
          <td>{{ task.status }}</td>
          <td>
            <router-link
              tag="button"
              class="btn btn-small"
              :to="'/task/' + task.id"
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
  name: "list",
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  mounted() {
    M.FormSelect.init(this.$refs.select);
  },
};
</script>
<style lang="scss" scoped>
.custom-td {
  max-width: 400px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>