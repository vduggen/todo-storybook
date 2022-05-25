<template>
  <PureTaskList
    :tasks="allTasks"
    @archive-task="archiveTask"
    @pin-task="pinTask"
  />
</template>

<script>
import { mapGetters } from "vuex";
import { ARCHIVE_TASK, PIN_TASK } from "../../store/types";
import PureTaskList from "../PureTaskList/index";

export default {
  name: "TaskList",
  
  components: {
    PureTaskList
  },

  computed: {
    ...mapGetters(['allTasks'])
  },

  methods: {
    archiveTask(task) {
      this.$store.dispatch(ARCHIVE_TASK.GET, task);
    },

    pinTask(task) {
      this.$store.dispatch(PIN_TASK.GET, task);
    }
  }
}
</script>