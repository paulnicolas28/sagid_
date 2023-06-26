import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';
import Entretien from '../form/Entretien';
import Territoire from '../form/Territoire';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Plan d'entretien" />
        <Tab label="Territoire" />
      </Tabs>
      {activeTab === 0 && (
        <Typography variant="h6" component="div" mt={2}>
          <Entretien/>
        </Typography>
      )}
      {activeTab === 1 && (
        <Typography variant="h6" component="div" mt={2}>
          <Territoire/>
        </Typography>
      )}
    </div>
  );
};

export default Sidebar;