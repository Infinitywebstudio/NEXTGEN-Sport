import { Typography, Box, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const Experience = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Parcours
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Votre parcours sportif professionnel
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Ajouter une expérience
        </Button>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" color="text.secondary" align="center">
          Aucune expérience ajoutée pour le moment
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
