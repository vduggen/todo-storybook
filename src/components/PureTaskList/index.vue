<template>
  <div class="list-items">
    <template v-if="loading">
      <div
        v-for="n in 6"
        :key="n"
        class="loading-item"
      >
        <span class="glow-checkbox" />

        <span class="glow-text">
          <span>Loading</span>
          <span>cool</span>
          <span>state</span>
        </span>
     </div>
    </template>

    <template
      v-else-if="isEmpty"
      class="list-items"
    >
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </template>

    <template v-else>
      <Task
        v-for="task in tasksInOrder"
        :key="task.id"
        :task="task"
        @archive-task="onArchiveTask"
        @pin-task="onPinTask"
      />
    </template>
  </div>
</template>

<script>
import Task from "../Task/index";

export default {
  name: "PureTaskList",
  
  components: {
    Task
  },

  props: {
    tasks: {
      type: Array,
      required: true,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: { 
    isEmpty() {
      return this.tasks.length === 0;
    },

    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === "TASK_PINNED"),
        ...this.tasks.filter(t => t.state !== "TASK_PINNED"),
      ]
    }
  },

  methods: {
    onArchiveTask(taskId) {
      this.$emit('archive-task', taskId);
    },

    onPinTask(taskId) {
      this.$emit('pin-task', taskId);
    }
  }
}
</script>