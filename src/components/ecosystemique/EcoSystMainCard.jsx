import React from "react";
import { data } from "../../constants";
import SummaryBox, { SummaryBoxNotes, SummaryBoxIndicateurs}  from "../summary-box/SummaryBox";
import Box from "../box/Box";
import CircleBox from "../summary-box/CircleBox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import "./ecosystemique.scss";

const EcoSystMainCard = () => {
  return (
    <div className="ecosystemique">
        <FontAwesomeIcon icon={faLeaf}/>
      <h1 className="ecosystemique__title">Aspect Ecosystémique</h1>
        <div className="row">
        <h3>Bilan Global</h3>
        </div>
        <div className="row">
                {data.notes_ecosysteme.map((item, index) => (
                <div
                    key={`summary-${index}`}
                    className="col-4 col-md-6 col-sm-12"
                >
                    <SummaryBoxIndicateurs item={item} />
                </div>
                ))}
        </div>
      
      <div className="row">
        <h3>Impacts sur les services écosystémiques des bords de route</h3>
      </div>
      <div className="row">  
          <div className="row">
            {data.indicateurs_ecosysteme.map((item, index) => (
              <div
                key={`summary-${index}`}
                className="col-3 col-md-4 col-sm-12 mb"
              >
                <SummaryBoxIndicateurs item={item} />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default EcoSystMainCard;
