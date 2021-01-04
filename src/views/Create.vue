<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Create Task</h2>
      <form>
        <div class="input-field">
          <input
            v-model="title"
            placeholder="Title"
            id="first_name"
            type="text"
            class="validate"
            required
          />
          <label for="title" >Title</label>
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
          <span class="character-counter">{{ description.length }}/2050</span>
        </div>
        <input type="text" ref="datepicker"/>
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
    }),
    M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
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