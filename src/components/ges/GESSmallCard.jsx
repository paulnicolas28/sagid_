import React from "react";
import { data } from "../../constants";
import SummaryBox, { SummaryBoxIndicateurs, SummaryBoxSpecial } from "../summary-box/SummaryBox";


const GESSmallCard = () => {
  return (
    <div>
      <h1>Aspect émission de GES</h1>
      <div className="row">
        <h3>Bilan Global</h3>
        <div className="col-12 col-md-12">
          <div className="row">
          <div className="col-6 hide-md">
            <SummaryBoxIndicateurs item={data.indicateurs_ges[0]} />
          </div>
          <div className="col-6 hide-md">
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GESSmallCard;
