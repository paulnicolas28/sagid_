import React from "react";
import SummaryBox, { SummaryBoxIndicateurs, SummaryBoxSpecial, SummaryBoxNotes,  SummaryBoxSpecialEconomique  } from "../summary-box/SummaryBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons'

import "./economique.scss";


const EcoNomiqueSmallCard = ({ currentData }) => {
  return (
    <div className="economique">
        <FontAwesomeIcon icon={faEuroSign}/>
        <h3>Aspect économique</h3>
      <div className="row">
        <h3>Bilan Global</h3>
        <div className="col-12 col-md-12">
          <div className="row">
          <div className="col-6 hide-md">
            <SummaryBoxNotes item={currentData.indicateurs_economiques[0]} />
            <SummaryBoxNotes item={currentData.indicateurs_economiques[1]} />
          </div>
          <div className="col-6 hide-md">
            <SummaryBoxSpecialEconomique item={currentData.coutsEconomiques}  widthGiven={"250px"}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoNomiqueSmallCard;
