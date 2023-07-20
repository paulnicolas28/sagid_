import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Box from "../components/box/Box";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/dashboard-wrapper/DashboardWrapper";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../components/summary-box/SummaryBox";
import { colors, data } from "../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import EcoSystMainCard from "../components/ecosystemique/EcoSystMainCard";
import GESSmallCard from "../components/ges/GESSmallCard";
import EcoNomiqueSmallCard from "../components/economique/EcoNomiqueSmallCard";
import Sidebar from "./Sidebar";
import EcoNomiqueMainCard from "../components/economique/EcoNomiqueMainCard";
import { Button } from "@mui/material";
import EcoSystSmallCard from "../components/ecosystemique/EcoSystSmallCard";
import GESMainCard from "../components/ges/GESMainCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";

import "./dashboard.scss";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

import styled from "@emotion/styled";

import jsonData from "../constants/data.json" // Adjust the path if needed

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Custom styles for the Tabs component
const StyledTabs = styled(Tabs)({
  backgroundColor: "#green",
});

// Custom styles for the Tab component
const StyledTab = styled(Tab)(({ theme }) => ({
  "& .MuiTab-wrapper": {
    color: "green",
  },
  "&.Mui-selected": {
    backgroundColor: "#green",
  },
}));

const Dashboard = () => {
  const [currentData, setCurrentData] = useState(jsonData);

  const [selectedTab, setSelectedTab] = useState("ecosystemique");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="dashboardwrapper">
      <DashboardWrapper>
        <DashboardWrapperMain>
          <div className="row">
            <StyledTabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="My Tabs"
            >
              <StyledTab
                label="Ecosystémique"
                value="ecosystemique"
                icon={<FontAwesomeIcon icon={faLeaf} />}
                onClick={() => setSelectedTab("ecosystemique")}
              />
              <StyledTab
                label="Économique"
                value="economique"
                icon={<FontAwesomeIcon icon={faEuroSign} />}
                onClick={() => setSelectedTab("economique")}
              />
              <StyledTab
                label="GES"
                value="ges"
                icon={<FontAwesomeIcon icon={faSmog} />}
                onClick={() => setSelectedTab("ges")}
              />
            </StyledTabs>
          </div>

          {selectedTab === "ecosystemique" && (
            <div>
              <Box>
                <EcoSystMainCard currentData={currentData} />
              </Box>
              <div className="row">
                <div className="col-6">
                  <Box>
                    <EcoNomiqueSmallCard currentData={currentData} />
                  </Box>
                </div>
                <div className="col-6">
                  <Box>
                    <GESSmallCard currentData={currentData} />
                  </Box>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "economique" && (
            <div>
              <Box>
                <EcoNomiqueMainCard currentData={currentData} />
              </Box>
              <div className="row">
                <div className="col-6">
                  <Box>
                    <EcoSystSmallCard currentData={currentData} />
                  </Box>
                </div>
                <div className="col-6">
                  <Box>
                    <GESSmallCard currentData={currentData} />
                  </Box>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "ges" && (
            <div>
              <Box>
                <GESMainCard currentData={currentData} />
              </Box>
              <div className="row">
                <div className="col-6">
                  <Box>
                    <EcoSystSmallCard currentData={currentData} />
                  </Box>
                </div>
                <div className="col-6">
                  <Box>
                    <EcoNomiqueSmallCard currentData={currentData} />
                  </Box>
                </div>
              </div>
            </div>
          )}
        </DashboardWrapperMain>
        <DashboardWrapperRight>
          <Sidebar currentData={currentData} setCurrentData={setCurrentData} />
        </DashboardWrapperRight>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
