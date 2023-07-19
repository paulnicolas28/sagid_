import React from "react";
import SummaryBox, { SummaryBoxIndicateurs, SummaryBoxSpecialGES, SummaryBoxNotesBtn } from "../summary-box/SummaryBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog } from '@fortawesome/free-solid-svg-icons'

import "./ges.scss";

const GESMainCard = ( {currentData} ) => {
  return (
    <div className="economique">
      <FontAwesomeIcon icon={faSmog} />
      <h1>Aspect économique</h1>
        <h3>Bilan Global</h3>
        <div className="col-12 col-md-12">
          <div className="row">
            <div className="col-6 hide-md">
              <SummaryBoxNotesBtn item={currentData.indicateurs_ges[0]} /> 
            </div>
            <div className="col-6 hide-md">
              <SummaryBoxSpecialGES item={currentData.revenueSummary} widthGiven={"500px"}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default GESMainCard;
