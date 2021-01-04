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
          <span class="helper-text" data-error="Title is required"></span>
        </div>
        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea
            id="description"
            class="materialize-textarea"
            v-model="description"
          >
          </textarea>
          <label for="description">Textarea</label>
          <span class="character-counter">{{ description.length }}/50</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  mounted() {
    M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
    });
  },
  data() {
    return {
      description: "",
      title: "",
    };
  },
};
</script>

<style scoped>
.chips {
  text-align: left;
}
</style>