import React from "react";
import { data } from "../../constants";
import SummaryBox, { SummaryBoxNotes, SummaryBoxIndicateurs, SummaryBoxSpecial}  from "../summary-box/SummaryBox";
import Box from "../box/Box";

const EcoSystMainCard = () => {
  return (
    <div>
      <h1>Aspect économique</h1>
      <div className="row">
        <h3>Bilan Global</h3>
        <div className="col-12 col-md-12">
          <div className="row">
          <div className="col-6 hide-md">
            <SummaryBoxIndicateurs item={data.indicateurs_economiques[0]} />
            <SummaryBoxIndicateurs item={data.indicateurs_economiques[1]} />
            <SummaryBoxIndicateurs item={data.indicateurs_economiques[2]} />
            <SummaryBoxIndicateurs item={data.indicateurs_economiques[3]} />
            <SummaryBoxIndicateurs item={data.indicateurs_economiques[4]} />
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

export default EcoSystMainCard;
