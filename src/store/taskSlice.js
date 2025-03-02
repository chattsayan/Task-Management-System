import { createSlice } from "@reduxjs/toolkit";

const loadState = () => JSON.parse(localStorage.getItem("tasks")) || [];

// Sorting function (descending order: newest tasks first)
const sortTasks = (tasks) =>
  [...tasks].sort(
    (a, b) =>
      new Date(b.updatedAt || b.startDate) -
      new Date(a.updatedAt || a.startDate)
  );

const taskSlice = createSlice({
  name: "tasks",
  initialState: sortTasks(loadState()),
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        status: action.payload.status || "Pending",
        assignee: action.payload.assignee || "",
        priority: action.payload.priority || "",
        updatedAt: new Date().toISOString(),
      };

      const newState = sortTasks([...state, newTask]);
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },

    removeTask: (state, action) => {
      const newState = sortTasks(
        state.filter((task) => task.id !== action.payload)
      );
      localStorage.setItem("tasks", JSON.stringify(state));
      return newState;
    },

    toggleTaskCompleted: (state, action) => {
      const newState = sortTasks(
        state.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status: task.status === "Completed" ? "Pending" : "Completed",
                endDate:
                  task.status === "Completed"
                    ? task.endDate
                    : new Date().toISOString(),
              }
            : task
        )
      );
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },

    updateTask: (state, action) => {
      const { id, ...updatedTaskFields } = action.payload;
      const newState = sortTasks(
        state.map((task) =>
          task.id === id
            ? {
                ...task,
                ...updatedTaskFields,
                updatedAt: new Date().toISOString(),
              }
            : task
        )
      );
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addTask, removeTask, toggleTaskCompleted, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;
export const selectAllTasks = (state) => state.tasks;
