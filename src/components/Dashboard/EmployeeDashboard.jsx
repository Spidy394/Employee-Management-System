import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = () => {
  return (
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header />
        <TaskListNumbers />
        <Tasklist />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
