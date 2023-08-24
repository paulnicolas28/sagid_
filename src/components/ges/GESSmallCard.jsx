import React from "react";
import SummaryBox, { SummaryBoxIndicateurs, SummaryBoxSpecialGES, SummaryBoxNotes } from "../summary-box/SummaryBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog } from '@fortawesome/free-solid-svg-icons'

import "./ges.scss";
import { Typography } from "@mui/material";

const GESSmallCard = ( {currentData} ) => {
  return (
    <div className="ges">
      <FontAwesomeIcon icon={faSmog}/>
      <h3>Aspect émission de GES</h3>
      <div className="row">
        <h3>Bilan Global</h3>
        <div className="col-12 col-md-12">
          <div className="row">
          <div className="col-6 hide-md">
            <SummaryBoxNotes item={currentData.indicateurs_ges} />
            <Typography variant="body2" gutterBottom> 
            {currentData.indicateurs_ges[0].subtitle} {currentData.indicateurs_ges[0].new_york} {currentData.indicateurs_ges[0].subtitle_2}
            </Typography>
          </div>
          <div className="col-6 hide-md">
            <SummaryBoxSpecialGES item={currentData.indicateurs_ges} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GESSmallCard;
