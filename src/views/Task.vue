<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
      <h2>{{ task.title }}</h2>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
        </div>
        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea
            id="description"
            class="materialize-textarea"
            v-model="description"
          >
          </textarea>
          <!-- <label for="description"></label> -->
          <span class="character-counter">{{ description.length }}/2050</span>
        </div>
        <input type="text" ref="datepicker" />
        <button class="btn" type="submit">Create Task</button>
        <button class="btn blue btn-finish" type="button">Finish Task</button>

      </form>
    </div>
    <p v-else>Task not found</p>
  </div>
</template>
<script>
export default {
  name: "task",
  data() {
    return {
      description: '',
      chips: null,
      date: null
    }
  },
  mounted() {
    this.description = this.task.description
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Task tags",
      data: this.task.tags
    }),
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    });
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    },
  },
  destroyed() {
    if(this.date && this.date.destroy) {
      this.date.destroy()
    }
    if(this.chips && this.chips.destroy) {
      this.chips.destroy()
  }
  },
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
  .btn-finish {
    margin-left: 1rem;
  }
</style>