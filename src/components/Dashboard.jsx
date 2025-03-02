import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { subMonths, parseISO, isSameMonth } from "date-fns";
import TaskGraph from "./TaskGraph";

const Card = ({ label, count, lastMonth, bg, link }) => {
  return (
    <Link to={link}>
      <div className="w-full h-32 bg-white p-5 shadow-md rounded-md flex items-center justify-between cursor-pointer">
        <div className="h-full flex flex-1 flex-col justify-between">
          <p className="text-base text-gray-600">{label}</p>
          <span className="text-2xl font-semibold">{count}</span>
          <span className="text-sm text-gray-400">{`${lastMonth} last month`}</span>
        </div>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${bg}`}
        >
          {label.charAt(0)}
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  lastMonth: PropTypes.number,
  bg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks);
  const lastMonthDate = subMonths(new Date(), 1);

  // Function to filter tasks dynamically
  const getTaskStats = (status) => {
    const filteredTasks = tasks.filter((task) =>
      status === "all" ? true : task.status === status
    );

    const lastMonthTasks = filteredTasks.filter((task) => {
      if (!task.startDate) return false;
      const taskDate = parseISO(task.startDate); // Convert startDate to Date object
      return isSameMonth(taskDate, lastMonthDate); // Check if task was created last month
    });

    return { count: filteredTasks.length, lastMonth: lastMonthTasks.length };
  };

  const stats = [
    {
      label: "TOTAL TASK",
      ...getTaskStats("all"),
      bg: "bg-[#1d4ed8]",
      link: "/statsTask",
    },
    {
      label: "COMPLETED TASK",
      ...getTaskStats("Completed"),
      bg: "bg-[#0f766e]",
      link: "/completeTask",
    },
    {
      label: "TASK IN PROGRESS",
      ...getTaskStats("In Progress"),
      bg: "bg-[#f59e0b]",
      link: "/inProgressTask",
    },
    {
      label: "PENDING",
      ...getTaskStats("Pending"),
      bg: "bg-[#be185d]",
      link: "/pendingTask",
    },
    {
      label: "DEPLOYED",
      ...getTaskStats("Deployed"),
      bg: "bg-[#008000]",
      link: "/deployedTask",
    },
    {
      label: "DEFERRED",
      ...getTaskStats("Deferred"),
      bg: "bg-[#ff0000]",
      link: "/deferredTask",
    },
  ];

  const chartData = stats.map(({ label, count, lastMonth }) => ({
    name: label,
    CurrentMonth: count,
    LastMonth: lastMonth,
  }));

  return (
    <div className="mx-auto w-[80%]">
      {/* <Sidebar /> */}
      <div className="flex flex-col w-full justify-between">
        <h1 className="text-3xl font-bold my-8 text-center ubuntu-bold">
          Task Dashboard
        </h1>

        {/* Task Graph */}
        <TaskGraph />

        {/* Task Stats */}
        <h2 className="text-xl font-semibold mb-4 text-center ubuntu-bold">
          Task Overview
        </h2>
        <div className="h-full w-80% mx-auto py-4 px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-item-center">
            {stats.map((task, index) => (
              <Card key={index} {...task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
