const taskDefault = {
    id: '1',
    title: 'Default Task',
}

export const taskInbox = {
    ...taskDefault,
    state: 'TASK_INBOX',
}

export const taskPinned = {
    ...taskDefault,
    state: 'TASK_PINNED',
}

export const taskArchived = {
    ...taskDefault,
    state: 'TASK_ARCHIVED',
}

const tasks = [
    { ...taskInbox, id: '1', title: 'Task 1' },
    { ...taskInbox, id: '2', title: 'Task 2' },
    { ...taskInbox, id: '3', title: 'Task 3' },
    { ...taskInbox, id: '4', title: 'Task 4' },
    { ...taskInbox, id: '5', title: 'Task 5' },
    { ...taskInbox, id: '6', title: 'Task 6' },
]

export default tasks;