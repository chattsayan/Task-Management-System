import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import { selectAllTasks } from "../store/taskSlice";

const COLORS = ["#0f766e", "#f59e0b", "#be185d", "#008000", "#ff0000"];

const TaskGraph = () => {
  const tasks = useSelector(selectAllTasks);

  const taskStats = [
    // { name: "Total", value: tasks.length },
    {
      name: "Completed",
      value: tasks.filter((task) => task.status === "Completed").length,
    },
    {
      name: "In Progress",
      value: tasks.filter((task) => task.status === "In Progress").length,
    },
    {
      name: "Pending",
      value: tasks.filter((task) => task.status === "Pending").length,
    },
    {
      name: "Deployed",
      value: tasks.filter((task) => task.status === "Deployed").length,
    },
    {
      name: "Deferred",
      value: tasks.filter((task) => task.status === "Deferred").length,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* <h2 className="text-lg font-semibold mb-4">Task Overview</h2> */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={taskStats}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {taskStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskGraph;
