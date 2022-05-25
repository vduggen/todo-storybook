const taskDefault = {
    id: '1',
    title: 'Default Task',
    updatedAt: new Date(2018, 0, 1, 9, 0),
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
    { ...taskDefault, id: '1', title: 'Task 1' },
    { ...taskDefault, id: '2', title: 'Task 2' },
    { ...taskDefault, id: '3', title: 'Task 3' },
    { ...taskDefault, id: '4', title: 'Task 4' },
    { ...taskDefault, id: '5', title: 'Task 5' },
    { ...taskDefault, id: '6', title: 'Task 6' },
]

export default tasks;