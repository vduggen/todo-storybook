import PureTaskList from "./index.vue";
import actionsData from "../../mocks/actionsData";
import tasks from "../../mocks/tasks";

export default {
    component: PureTaskList,
    title: "PureTaskList",
    excludeStories: /.*Data$/,
    decorators: [
        () => ({ template: '<div style="margin: 3rem;"> <story /> </div>' }),
    ],
    argTypes: {
        onPinTask: {},
        onArchiveTask: {},
    }
}

const Template = args => ({
    components: { PureTaskList },
    args: {
        ...args,
        ...actionsData
    },
    template: '<PureTaskList v-bind="args" />',
})

export const Default = Template({ tasks });

export const WithPinnedTasks = Template({
    tasks: [
        ...tasks.slice(0,5),
        { id: 6, title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
    ]
});

export const Loading = Template({ tasks: [], loading: true });

export const Empty = Template({ tasks: [] });