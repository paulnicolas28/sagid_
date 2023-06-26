import React from "react";
import { data } from "../../constants";
import SummaryBox, { SummaryBoxNotes, SummaryBoxIndicateurs}  from "../summary-box/SummaryBox";
import Box from "../box/Box";

const EcoSystSmallCard = () => {
  return (
    <div>
      <h1>Bilan Ecosystémique</h1>
        <Box>
        <div className="row">
        <h3>Bilan Global</h3>
        </div>
        <div className="row">
            <div className="col-12 col-md-12">
            <div className="row">
                {data.notes_ecosysteme.map((item, index) => (
                <div
                    key={`summary-${index}`}
                    className="col-6 col-md-6 col-sm-12 mb"
                >
                    <SummaryBoxIndicateurs item={item} />
                </div>
                ))}
            </div>
            </div>
        </div>
        </Box>
    </div>
  );
};

export default EcoSystSmallCard;
