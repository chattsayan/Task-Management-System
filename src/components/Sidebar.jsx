import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-indigo-500 min-h-[100vh] sm:min-h-screen w-[5rem] sm:w-[19rem] flex flex-col gap-4 ubuntu-bold">
      <div className="flex items-center gap-2 justify-center h-16 text-white text-2xl font-bold mt-6">
        {/* <VscTasklist /> */}
        <img
          src="https://www.svgrepo.com/show/182007/notebook-agenda.svg"
          alt="logo"
          className="w-12 h-12 md:w-14 md:h-14"
        />
        <span className="sm:block hidden">Task Manager</span>
      </div>
      <nav className="flex gap-10 justify-start">
        <ul className="py-6 flex flex-col justify-start">
          {[
            {
              to: "/",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/255116/stats-graph.svg"
                  alt="dashboard"
                  className="w-7 h-7 md:w-8 md:h-8 gr"
                />
              ),
              label: "Dashboard",
            },
            {
              to: "/completeTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/375778/check.svg"
                  alt="completed"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "Completed Tasks",
            },
            {
              to: "/pendingTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/256755/file-files-and-folders.svg"
                  alt="pending"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "Pending Tasks",
            },
            {
              to: "/inProgressTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/375829/hourglass.svg"
                  alt="in progress"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "In Progress Tasks",
            },
            {
              to: "/deployedTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/178966/cloud-sky.svg"
                  alt="deployed"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "Deployed Tasks",
            },
            {
              to: "/deferredTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/201779/clock.svg"
                  alt="deferred"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "Deferred Tasks",
            },
            {
              to: "/addTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/422422/add-interface-multimedia.svg"
                  alt="add task"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "Add New Tasks",
            },
            {
              to: "/statsTask",
              icon: (
                <img
                  src="https://www.svgrepo.com/show/178981/search-search.svg"
                  alt="all task"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              ),
              label: "Task Stats",
            },
          ].map(({ to, icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative group px-6 py-4 font-semibold text-lg flex justify-start items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? "text-white bg-indigo-700"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              <span className="text-2xl">{icon}</span>
              {/* Tooltip for small screens */}
              <span className="sm:hidden absolute left-full ml-1 bg-transparent text-black text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>

              <span className="sm:block hidden">{label}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
