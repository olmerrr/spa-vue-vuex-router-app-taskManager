<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Create Task</h2>
      <form>
        <div class="input-field">
          <input
            placeholder="Title"
            id="first_name"
            type="text"
            class="validate"
            required 
          />
          <label for="title">Title</label>
        </div>
        <div class="chips" ref="chips"></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  mounted() {
    M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags'
    });
  },
};
</script>
<style scoped>
 .chips {
   text-align: left;
 }
</style>