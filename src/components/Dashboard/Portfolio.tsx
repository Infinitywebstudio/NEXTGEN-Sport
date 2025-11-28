import { useState } from 'react';
import { Typography, Box, Button, Tabs, Tab } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Portfolio
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gérez vos vidéos et images
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<UploadIcon />}
        >
          Upload
        </Button>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Vidéos (0)" />
          <Tab label="Images (0)" />
        </Tabs>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" color="text.secondary" align="center">
          {tabValue === 0 ? 'Aucune vidéo' : 'Aucune image'}
        </Typography>
      </Box>
    </Box>
  );
};

export default Portfolio;
