import React from "react";
import { data } from "../../constants";
import SummaryBox, {
  SummaryBoxNotesBtn,
  SummaryBoxIndicateurs,
  SummaryBoxSpecial,
  SummaryBoxSpecialEconomique,
} from "../summary-box/SummaryBox";
import Box from "../box/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";


import "./economique.scss";

const EcoSystMainCard = () => {

  return (
    <div className="economique">
      <FontAwesomeIcon icon={faEuroSign} />
      <h1>Aspect économique</h1>
        <h3>Bilan Global</h3>
        <div className="col-12 col-md-12">
          <div className="row">
            <div className="col-6 hide-md">
              <SummaryBoxNotesBtn item={data.indicateurs_economiques[0]} /> 
              <SummaryBoxNotesBtn item={data.indicateurs_economiques[1]} />
              <SummaryBoxNotesBtn item={data.indicateurs_economiques[2]} />
              <SummaryBoxNotesBtn item={data.indicateurs_economiques[3]} />
              <SummaryBoxNotesBtn item={data.indicateurs_economiques[4]} />
            </div>
            <div className="col-6 hide-md">
              <SummaryBoxSpecialEconomique item={data.coutsEconomiques} widthGiven={"500px"}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default EcoSystMainCard;
