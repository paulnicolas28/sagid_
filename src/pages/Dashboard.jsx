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
import { useEffect } from "react";

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
    color: "black",
  },
  "&.Mui-selected": {
    backgroundColor: "#green",
  },
}));

const Dashboard = () => {

  const [visible, setVisible] = useState(false);

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
                <EcoSystMainCard currentData={currentData} visible={visible}/>
              </Box>
              <div className="row">
                <div className="col-6">
                  <Box small>
                    <EcoNomiqueSmallCard currentData={currentData}visible={visible}/>
                  </Box>
                </div>
                <div className="col-6">
                <Box small>
                    <GESSmallCard currentData={currentData} visible={visible}/>
                </Box>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "economique" && (
            <div>
              <Box>
                <EcoNomiqueMainCard currentData={currentData} visible={visible}/>
              </Box>
              <div className="row">
                <div className="col-6">
                <Box small>
                    <EcoSystSmallCard currentData={currentData} visible={visible}/>
                  </Box>
                </div>
                <div className="col-6">
                <Box small>
                    <GESSmallCard currentData={currentData}visible={visible}/>
                  </Box>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "ges" && (
            <div>
              <Box>
                <GESMainCard currentData={currentData} visible={visible}/>
              </Box>
              <div className="row">
                <div className="col-6">
                <Box small>
                    <EcoSystSmallCard currentData={currentData} visible={visible}/>
                  </Box>
                </div>
                <div className="col-6">
                <Box small>
                    <EcoNomiqueSmallCard currentData={currentData}visible={visible}/>
                  </Box>
                </div>
              </div>
            </div>
          )}
        </DashboardWrapperMain>
        <DashboardWrapperRight>
          <Sidebar currentData={currentData} setCurrentData={setCurrentData} setVisible={setVisible}/>
        </DashboardWrapperRight>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard;
