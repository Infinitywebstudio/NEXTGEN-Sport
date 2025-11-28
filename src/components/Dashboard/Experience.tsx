import { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  WorkOutline as WorkIcon,
} from '@mui/icons-material';

interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  tags: string[];
}

const mockExperiences: ExperienceItem[] = [
  {
    id: '1',
    title: 'Attaquant Titulaire',
    organization: 'Paris FC U19',
    startDate: '2023-09',
    endDate: '',
    current: true,
    description: 'Attaquant principal de l\'équipe U19. 15 buts et 8 passes décisives cette saison.',
    tags: ['Football', 'U19', 'Attaquant'],
  },
  {
    id: '2',
    title: 'Stage Intensif',
    organization: 'Académie de Football de Paris',
    startDate: '2023-06',
    endDate: '2023-08',
    current: false,
    description: 'Stage d\'été intensif axé sur le développement technique et tactique.',
    tags: ['Formation', 'Technique'],
  },
  {
    id: '3',
    title: 'Joueur U17',
    organization: 'Red Star FC',
    startDate: '2021-09',
    endDate: '2023-06',
    current: false,
    description: 'Évolution au sein de l\'équipe U17. Participation à plusieurs tournois régionaux.',
    tags: ['Football', 'U17', 'Tournois'],
  },
];

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(mockExperiences);
  const [open, setOpen] = useState(false);

  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate = (date: string) => {
    if (!date) return 'Présent';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' });
  };

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
          onClick={handleAdd}
        >
          Ajouter une expérience
        </Button>
      </Box>

      <Box sx={{ position: 'relative', pl: 4 }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: 15,
            top: 0,
            bottom: 0,
            width: 2,
            bgcolor: 'divider',
          }}
        />

        {experiences.map((exp, index) => (
          <Box key={exp.id} sx={{ position: 'relative', mb: 4 }}>
            {/* Timeline dot */}
            <Box
              sx={{
                position: 'absolute',
                left: -28,
                top: 20,
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: exp.current ? 'secondary.main' : 'primary.main',
                border: '3px solid',
                borderColor: 'background.paper',
                boxShadow: 2,
              }}
            />

            <Card>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                  <Box sx={{ flexGrow: 1 }}>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <WorkIcon sx={{ color: 'secondary.main' }} />
                      <Typography variant="h6" fontWeight={600}>
                        {exp.title}
                      </Typography>
                      {exp.current && (
                        <Chip label="En cours" size="small" color="secondary" />
                      )}
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {exp.organization}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {formatDate(exp.startDate)} - {exp.current ? 'Présent' : formatDate(exp.endDate)}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {exp.description}
                    </Typography>
                    <Box display="flex" gap={1} flexWrap="wrap">
                      {exp.tags.map((tag, idx) => (
                        <Chip key={idx} label={tag} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </Box>
                  <Box display="flex" gap={1}>
                    <IconButton size="small" color="primary">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Add Experience Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Ajouter une expérience</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField fullWidth label="Titre du poste" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Organisation / Club" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date de début"
                type="month"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date de fin"
                type="month"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Je suis actuellement à ce poste"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tags (séparés par des virgules)"
                placeholder="Football, U19, Attaquant"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Experience;
