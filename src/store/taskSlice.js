import { createSlice } from "@reduxjs/toolkit";

const loadState = () => JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState: loadState(),
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
      };

      // state.push(newTask);
      // localStorage.setItem("tasks", JSON.stringify(state));

      const newState = [...state, newTask];
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;
    },

    removeTask: (state, action) => {
      // const taskIndex = state.findIndex((task) => task.id === action.payload);
      // state.splice(taskIndex, 1);
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state));
      return newState;
    },

    toggleTaskCompleted: (state, action) => {
      const newState = state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
              endDate:
                task.status === "Completed" ? null : new Date().toISOString(),
            }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;

      // const task = state.find((task) => task.id === action.payload);
      // if (task) {
      //   if (task.status !== "Completed".toLowerCase()) {
      //     task.status = "Completed";
      //     task.endDate = new Date().toISOString();
      //   } else {
      //     task.status = "Pending";
      //     task.endDate = null;
      //   }
      //   localStorage.setItem("tasks", JSON.stringify(state));
      // }
    },

    updateTask: (state, action) => {
      const { id, ...updatedTaskFields } = action.payload;
      const newState = state.map((task) =>
        task.id === id ? { ...task, ...updatedTaskFields } : task
      );
      localStorage.setItem("tasks", JSON.stringify(newState));
      return newState;

      // const taskIndex = state.findIndex((task) => task.id === id);
      // if (taskIndex !== -1) {
      //   state[taskIndex] = { ...state[taskIndex], ...updatedTaskFields };
      //   localStorage.setItem("tasks", JSON.stringify(state));
      // }
    },
  },
});

export const { addTask, removeTask, toggleTaskCompleted, updateTask } =
  taskSlice.actions;

export default taskSlice.reducer;
export const selectAllTasks = (state) => state.tasks;
