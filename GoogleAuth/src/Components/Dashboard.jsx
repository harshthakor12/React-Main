import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="w-full bg-white shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome to your dashboard 🚀</p>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
        {/* Example Dashboard Cards */}
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Users</h2>
          <p className="text-2xl font-bold mt-2">1,245</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Sales</h2>
          <p className="text-2xl font-bold mt-2">$8,430</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-2xl font-bold mt-2">$12,530</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
