<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Create Task</h2>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            v-model="title"
            id="first_name"
            type="text"
            class="validate"
            required
            autofocus
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
          <label for="description">Description</label>
          <span class="character-counter">{{ description.length }}/2050</span>
        </div>
        <input type="text" ref="datepicker"/>
        <button class="btn" type="submit">Create Task</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Create",
  data() {
    return {
      description: "",
      title: "",
      chips: null,
      date: null
    };
  },
  mounted() {
  
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
    }),
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    });
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id : Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }
      
      this.$store.dispatch('ceateTask', task);
      this.$router.push('/list');
      //после создания задачи я переадресую на стр /list
    },
  },
  destroyed() {
    if(this.date && this.date.destroy) {
      this.date.destroy()
    }
    if(this.chips && this.date.destroy) {
      this.chips.destroy()
    }
  },
};
</script>

<style scoped>
.chips {
  text-align: left;
}
</style>