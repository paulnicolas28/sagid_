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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'


import "./dashboard.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard2 = () => {
  const [activeMainComponent, setActiveMainComponent] = useState(
    <EcoSystMainCard />
  );
  const [activeLeftComponent, setActiveLeftComponent] = useState(
    <EcoNomiqueSmallCard />
  );
  const [activeRightComponent, setActiveRightComponent] = useState(
    <GESSmallCard />
  );

  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  const handleLoadComponent1 = () => {
    setActiveMainComponent(<EcoSystMainCard />);
    setActiveLeftComponent(<EcoNomiqueSmallCard />);
    setActiveRightComponent(<GESSmallCard />);
    setSelected1(true);
    setSelected2(false);
    setSelected3(false);
  };

  const handleLoadComponent2 = () => {
    setActiveMainComponent(<EcoNomiqueMainCard />);
    setActiveLeftComponent(<EcoSystSmallCard />);
    setActiveRightComponent(<GESSmallCard />);
    setSelected2(true);
    setSelected1(false);
    setSelected3(false);
  };

  const handleLoadComponent3 = () => {
    setActiveMainComponent(<GESMainCard />);
    setActiveLeftComponent(<EcoSystSmallCard />);
    setActiveRightComponent(<EcoNomiqueSmallCard />);
    setSelected3(true);
    setSelected1(false);
    setSelected2(false);
  };

  return (
    <div className="dashboardwrapper">
      <DashboardWrapper>
        <DashboardWrapperMain>
          <div className="row">
                <Button
                  variant={selected1 ? "contained" : "outlined"}
                  onClick={handleLoadComponent1}
                >
                <FontAwesomeIcon icon={faLeaf}/>
                </Button>
                <Button
                  variant={selected2 ? "contained" : "outlined"}
                  onClick={handleLoadComponent2}
                >
                <FontAwesomeIcon icon={faEuroSign}/>
                </Button>
                <Button
                  variant={selected3 ? "contained" : "outlined"}
                  onClick={handleLoadComponent3}
                >
                <FontAwesomeIcon icon={faSmog}/>
                </Button>
                </div>
            <Box>
              {activeMainComponent}
            </Box>
          <div className="row">
            <div className="col-6">
              <Box>{activeLeftComponent}</Box>
            </div>
            <div className="col-6">
              <Box>{activeRightComponent}</Box>
            </div>
          </div>
        </DashboardWrapperMain>
        <DashboardWrapperRight>
          <Sidebar />
        </DashboardWrapperRight>
      </DashboardWrapper>
    </div>
  );
};

export default Dashboard2;
