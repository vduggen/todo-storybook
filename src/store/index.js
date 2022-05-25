import Vue from 'vue'
import Vuex from 'vuex'
import { taskInbox } from '../mocks/tasks'
import { ARCHIVE_TASK, PIN_TASK } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { ...taskInbox, id: '1', title: 'Task 1' },
      { ...taskInbox, id: '2', title: 'Task 2' },
      { ...taskInbox, id: '3', title: 'Task 3' },
      { ...taskInbox, id: '4', title: 'Task 4' },
      { ...taskInbox, id: '5', title: 'Task 5' },
      { ...taskInbox, id: '6', title: 'Task 6' },
    ]
  },
  mutations: {
    [ARCHIVE_TASK.SET](state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_ARCHIVED';
    },
    [PIN_TASK.SET](state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_PINNED';
    },
  },
  actions: {
    [ARCHIVE_TASK.GET]({ commit }, id) {
      commit(ARCHIVE_TASK.SET, id);
    },
    [PIN_TASK.GET]({ commit }, id) {
      commit(PIN_TASK.SET, id);
    },
  },
  getters: {
    allTasks: (state) => state.tasks
  }
})
