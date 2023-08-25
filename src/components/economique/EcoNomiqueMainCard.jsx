import React, { useState } from "react";
import { SummaryBoxSpecialEconomique,  SummaryBoxSpecialEconomique_2} from "../summary-box/SummaryBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab } from "@mui/material";
import styled from "@emotion/styled";

import "./economique.scss";

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "bold",
  paddingBottom: "10px",
  color: "#333333",
  "&.Mui-selected": {
    color: "#ff0000",
  },
}));

const EcoSystMainCard = ({ currentData, visible }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="economique eco-main">
      <FontAwesomeIcon icon={faEuroSign} />
      <h1>Aspect économique</h1>
      <h3>Bilan Global</h3>
      <div className="col-12 col-md-12">
        <div className="row">
          <div className="col-3">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={activeTab}
              onChange={handleTabChange}
            >
              <StyledTab
                label={
                  "Evolution des coûts d'entretien"
                }
              />
              <StyledTab
                label={
                  "Détail des coûts d'entretien"
                }
              />
            </Tabs>
          </div>
          <div className="col-9">
            {activeTab === 0 && (
              <SummaryBoxSpecialEconomique
                item={currentData.indicateurs_economiques}
                widthGiven={"500px"}
              />
            )}
            {activeTab === 1 && (
              <SummaryBoxSpecialEconomique_2
                item={currentData.indicateurs_economiques}
                widthGiven={"500px"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSystMainCard;
