import React from "react";
import { data } from "../../constants";
import SummaryBox, {
  SummaryBoxNotes,
  SummaryBoxIndicateurs,
  SummaryBoxSpecial,
  SummaryBoxSpecialEconomique,
} from "../summary-box/SummaryBox";
import Box from "../box/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

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
              <SummaryBoxNotes item={data.indicateurs_economiques[0]} />
              <SummaryBoxNotes item={data.indicateurs_economiques[1]} />
              <SummaryBoxNotes item={data.indicateurs_economiques[2]} />
              <SummaryBoxNotes item={data.indicateurs_economiques[3]} />
              <SummaryBoxNotes item={data.indicateurs_economiques[4]} />
            </div>
            <div className="col-6 hide-md">
              <SummaryBoxSpecialEconomique item={data.coutsEconomiques} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default EcoSystMainCard;
