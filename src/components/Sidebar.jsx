import {
  MdDashboard,
  MdOutlineTaskAlt,
  MdAddTask,
  MdPendingActions,
  MdCloudDone,
  MdOutlineAccessTimeFilled,
  MdQueryStats,
} from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { VscTasklist } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-indigo-500 min-h-[100vh] sm:min-h-screen w-[5rem] sm:w-[19rem] flex flex-col gap-4 roboto-regular">
      <div className="flex items-center gap-2 justify-center h-16 text-white text-2xl font-bold mt-6">
        <VscTasklist />
        <span className="sm:block hidden">Task Manager</span>
      </div>
      <nav className="flex gap-10 justify-start">
        <ul className="py-6 flex flex-col justify-start">
          {/* Dashboard */}
          <Link
            to="/"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdDashboard className="text-2xl" />
            <span className="sm:block hidden">Dashboard</span>
          </Link>
          {/* Completed Tasks */}
          <Link
            to="/completeTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdOutlineTaskAlt className="text-2xl" />
            <span className="sm:block hidden">Completed Tasks</span>
          </Link>
          {/* Pending Tasks */}
          <Link
            to="/pendingTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdPendingActions className="text-2xl" />
            <span className="sm:block hidden">Pending Tasks</span>
          </Link>
          {/* In Progress Tasks */}
          <Link
            to="/inProgressTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <GrInProgress className="text-2xl" />
            <span className="sm:block hidden">In Progress Tasks</span>
          </Link>
          {/* Deployed Tasks */}
          <Link
            to="/deployedTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdCloudDone className="text-2xl" />
            <span className="sm:block hidden">Deployed Tasks</span>
          </Link>
          {/* Deferred Tasks */}
          <Link
            to="/deferredTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdOutlineAccessTimeFilled className="text-2xl" />
            <span className="sm:block hidden">Deferred Tasks</span>
          </Link>

          {/* Add New Tasks */}
          <Link
            to="/addTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdAddTask className="text-2xl" />
            <span className="sm:block hidden">Add New Tasks</span>
          </Link>

          {/* Task Stats */}
          <Link
            to="/statsTask"
            className="px-6 py-4 font-semibold text-lg text-gray-300 hover:text-gray-700 cursor-pointer flex justify-start items-center gap-2"
          >
            <MdQueryStats className="text-2xl" />
            <span className="sm:block hidden">Task Stats</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
