import { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
} from '@mui/material';
import {
  Save as SaveIcon,
  Cancel as CancelIcon,
  PhotoCamera as PhotoCameraIcon,
} from '@mui/icons-material';

const Profile = () => {
  const [formData, setFormData] = useState({
    prenom: 'Amadou',
    nom: 'DIALLO',
    dateNaissance: '2005-03-15',
    nationalite: 'Française',
    ville: 'Paris',
    pays: 'France',
    sport: 'Football',
    position: 'Attaquant',
    niveau: 'Semi-professionnel',
    bio: 'Attaquant polyvalent avec une excellente vision du jeu.',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    console.log('Sauvegarde...', formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Mon Profil
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Gérez vos informations personnelles et sportives
          </Typography>
        </Box>
        {!editing ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setEditing(true)}
          >
            Modifier le profil
          </Button>
        ) : (
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              startIcon={<CancelIcon />}
              onClick={handleCancel}
            >
              Annuler
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SaveIcon />}
              onClick={handleSave}
            >
              Enregistrer
            </Button>
          </Box>
        )}
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Photo de Profil
              </Typography>
              <Box display="flex" alignItems="center" gap={3}>
                <Avatar
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150&h=150&fit=crop"
                  sx={{ width: 120, height: 120 }}
                />
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    JPG, PNG ou GIF (Max. 5MB)
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<PhotoCameraIcon />}
                    component="label"
                    disabled={!editing}
                  >
                    Changer la photo
                    <input hidden accept="image/*" type="file" />
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Informations Personnelles
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Prénom"
                    value={formData.prenom}
                    onChange={handleChange('prenom')}
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nom"
                    value={formData.nom}
                    onChange={handleChange('nom')}
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date de Naissance"
                    type="date"
                    value={formData.dateNaissance}
                    onChange={handleChange('dateNaissance')}
                    disabled={!editing}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nationalité"
                    value={formData.nationalite}
                    onChange={handleChange('nationalite')}
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Ville"
                    value={formData.ville}
                    onChange={handleChange('ville')}
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Pays"
                    value={formData.pays}
                    onChange={handleChange('pays')}
                    disabled={!editing}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Informations Sportives
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sport"
                    value={formData.sport}
                    onChange={handleChange('sport')}
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Position / Poste"
                    value={formData.position}
                    onChange={handleChange('position')}
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Niveau"
                    value={formData.niveau}
                    onChange={handleChange('niveau')}
                    disabled={!editing}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                À propos
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Biographie"
                value={formData.bio}
                onChange={handleChange('bio')}
                disabled={!editing}
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
