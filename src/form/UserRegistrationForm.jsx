import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  Select,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import "./form.scss";

const StyledFormControl = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "300px",
  margin: "auto",
  padding: "1rem",
});

const StyledButton = styled(Button)({
  marginTop: "1rem",
});

function UserRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organisme, setOrganisme] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedSecteur, setSelectedSecteur] = useState("recherche");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleOrganismeChange = (event) => {
    setOrganisme(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleSecteurChange = (event) => {
    setSelectedSecteur(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setOrganisme("");
    setPostalCode("");
    setSelectedSecteur("Recherche");
  };

  const navigate = useNavigate();

const redirectToTerritoire = () => {    
    navigate("/territoire"); // Replace '/other-page' with the desired URL or path
}



  return (
    <StyledFormControl className="form">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Prénom</FormLabel>
          <TextField
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Nom</FormLabel>
          <TextField
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Organisme</FormLabel>
          <TextField
            value={organisme}
            onChange={handleOrganismeChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Secteur</FormLabel>
          <Select value={selectedSecteur} onChange={handleSecteurChange}>
            <MenuItem value="recherche">Recherche</MenuItem>
            <MenuItem value="collectivite">Collectivité</MenuItem>
            <MenuItem value="entreprise">Entreprise privée</MenuItem>
            <MenuItem value="particulier">Particulier</MenuItem>
            <MenuItem value="autre">Autre</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Code Postal</FormLabel>
          <TextField
            type="postalCode"
            value={postalCode}
            onChange={handlePostalCodeChange}
            required
          />
        </FormControl>
        <StyledButton type="submit" variant="contained" color="primary" onClick={redirectToTerritoire}>
          Continuer
        </StyledButton>
      </form>
    </StyledFormControl>
  );
}

export default UserRegistrationForm;
