import Task from './index.vue';

import { taskArchived, taskInbox, taskPinned } from '../../mocks/tasks';
import actionsData from '../../mocks/actionsData';

export default {
  component: Task,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Task',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

const Template = task => ({
  components: { Task },
  args: {
    task,
    ...actionsData
  },
  template: '<Task v-bind="args" />',
});

export const Default = Template(taskInbox);

export const Pinned = Template(taskPinned);

export const Archived = Template(taskArchived);