import React, { useEffect, useState } from "react";
import link from "../assets/link.svg";
import alert from "../assets/alert.svg";
import { TextField } from "@mui/material";
// import { fetchDependencies } from ""; // Assuming you're using fetchDependencies to mock API
import { nanoid } from "nanoid";
import { fetchDependecies } from "../mockApi";

const CartCampaign = () => {
  const [dependenciesData, setDependenciesData] = useState([]);
  const [selectedDependencies, setSelectedDependencies] = useState([]);
  const [isDbMocked, setIsDbMocked] = useState(false);
  const [dbConfig, setDbConfig] = useState({ username: "", password: "" });
  const [flowName, setFlowName] = useState("POST /carts/carts_id");

  useEffect(() => {
    // Fetching dependencies from the API
    fetchDependecies().then((data) => {
      setDependenciesData(data);
    });

    // Fetch existing configuration when component mounts
    fetch(`/configuration?flow=${flowName}`)
      .then((res) => res.json())
      .then((config) => {
        setSelectedDependencies(config.entities_to_mock || []);
        setIsDbMocked(config.is_db_mocked || false);
        setDbConfig(config.db_config || { username: "", password: "" });
      });
  }, [flowName]);

  const handleSave = () => {
    const body = {
      flow: flowName,
      entities_to_mock: selectedDependencies,
      is_db_mocked: isDbMocked,
      db_config: dbConfig,
    };

    // POST /configuration API to save configuration
    fetch("/configuration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        console.log("Configuration saved successfully");
      }
    });
  };

  const handleDependencySelect = (dependency) => {
    setSelectedDependencies((prev) =>
      prev.includes(dependency)
        ? prev.filter((dep) => dep !== dependency)
        : [...prev, dependency]
    );
  };

  const handleDbMockToggle = () => {
    setIsDbMocked(!isDbMocked);
  };

  return (
    <form className="flex-[.350] bg-[#363636] overflow-auto relative">
      <h2 className="text-white font-bold text-xl mb-2 px-4 py-2">
        cart_campaign
      </h2>
      <div className="flex flex-col gap-2 px-4 py-2">
        <div className="flex items-center gap-4">
          <img src={alert} alt="alert" />
          <p className="text-base font-medium text-white">
            Last 2 commits scanned
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={alert} alt="alert" />
          <p className="text-base font-medium text-white">
            5 entry points identified
          </p>
        </div>
      </div>

      {/* Flow selection */}
      <div className="flex flex-col gap-1 mt-2 px-4 py-2">
        <label className="text-white text-base font-medium">Selected Flow</label>
        <select
          className="bg-transparent text-white border-[1px] p-2 rounded-md"
          value={flowName}
          onChange={(e) => setFlowName(e.target.value)}
        >
          <option>POST /carts/carts_id</option>
          {/* Add other flow options here */}
        </select>
      </div>

      {/* Dependencies Section */}
      <div className="flex flex-col mt-2 px-4 py-2">
        <h2 className="text-white font-medium text-base">Dependencies</h2>
        <p className="text-sm text-[#B7B7B7]">
          Select the ones you want to mock
        </p>
        <div className="flex flex-col gap-4 mt-4">
          {dependenciesData.map((item) => {
            const id = nanoid();
            return (
              <div key={id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={selectedDependencies.includes(item)}
                    onChange={() => handleDependencySelect(item)}
                  />
                  <span className="text-[15px] font-medium text-white">
                    {item}
                  </span>
                </div>
                <button>
                  <img src={link} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mock Database Section */}
      <div className="flex flex-col mt-2 px-4 py-2">
        <h2 className="text-white font-medium text-base">Databases</h2>
        <p className="text-sm text-[#B7B7B7]">
          Select if you want to mock databases
        </p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="database"
                checked={isDbMocked}
                onChange={handleDbMockToggle}
              />
              <span className="text-[15px] font-medium text-white">
                I want to mock databases
              </span>
            </div>
            <button>
              <img src={link} alt="" />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id='database'
                checked={!isDbMocked}
                onChange={handleDbMockToggle}
                
              />
              <span className="text-[15px] font-medium text-white">
                I do not want to mock databases
              </span>
            </div>
            <button>
              <img src={link} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* Database Config Section */}
      <div className={`mt-2 flex flex-col gap-2 px-4 py-2 ${isDbMocked ? "opacity-50 pointer-events-none" : ""}`}>
        <h2 className="text-white font-bold text-[16px]">Database Configurations</h2>
        <div className="flex flex-col gap-6">
          <TextField
            required
            id="db-username"
            label="Database User"
            value={dbConfig.username}
            onChange={(e) =>
              setDbConfig((prev) => ({ ...prev, username: e.target.value }))
            }
            disabled={isDbMocked}
            color="warning"
            focused
          />
          <TextField
            type="password"
            required
            id="db-password"
            label="Database Password"
            value={dbConfig.password}
            onChange={(e) =>
              setDbConfig((prev) => ({ ...prev, password: e.target.value }))
            }
            disabled={isDbMocked}
            color="warning"
            focused
          />
        </div>
      </div>

      <div className="px-4 py-2 flex items-center justify-end border-[1px] sticky bottom-0 bg-[#363636] z-10 border-slate-400 border-l-0">
        <button
          type="button"
          onClick={handleSave}
          className="text-white font-medium text-sm bg-blue-500 rounded-md px-4 py-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default CartCampaign;
