import React from "react";
import { data } from "../../constants";
import SummaryBox, { SummaryBoxNotes, SummaryBoxIndicateurs}  from "../summary-box/SummaryBox";
import Box from "../box/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import "./ecosystemique.scss";


const EcoSystSmallCard = () => {
  return (
    <div className="ecosystemique">
      <FontAwesomeIcon icon={faLeaf}/>
      <h3>Aspect Ecosystémique</h3>
        <h3>Bilan Global</h3>
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
  );
};

export default EcoSystSmallCard;
