import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function BoosterApp() {
  const [balance, setBalance] = useState(387385548);
  const [xp, setXp] = useState(60);
  const [energy, setEnergy] = useState(7500);

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance((prev) => prev + 5000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: ["0s", "5s", "10s", "15s", "20s"],
    datasets: [
      {
        label: "$BOS",
        data: [
          balance - 20000,
          balance - 15000,
          balance - 10000,
          balance - 5000,
          balance,
        ],
        fill: false,
        borderColor: "#00BFFF",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">BOOSTER</h1>
          <p className="text-sm text-gray-400">Level 7</p>
          <div className="w-40 h-2 bg-gray-700 rounded mt-1">
            <div
              className="h-2 bg-blue-500 rounded"
              style={{ width: `${xp}%` }}
            ></div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold">⚡ {balance.toLocaleString()} BOS</p>
          <p className="text-sm text-green-400">+5.0K/s</p>
        </div>
      </div>

      <motion.div
        className="flex justify-center my-6"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/8285/8285710.png"
          alt="rocket"
          className="w-24 h-24"
        />
      </motion.div>

      <p className="text-center text-sm">Energy: {energy} / 7500</p>
      <div className="w-full h-2 bg-gray-700 rounded my-2">
        <div
          className="h-2 bg-green-500 rounded"
          style={{ width: `${(energy / 7500) * 100}%` }}
        ></div>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl my-4">
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { display: false }, x: { display: false } },
          }}
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-700 flex justify-around py-3">
        <button className="text-white text-sm">🏠 Home</button>
        <button className="text-white text-sm">⚡ Boost</button>
        <button className="text-white text-sm">🎁 Airdrop</button>
        <button className="text-white text-sm">🎯 Quests</button>
        <button className="text-white text-sm">👥 Invite</button>
      </div>
    </div>
  );
}
