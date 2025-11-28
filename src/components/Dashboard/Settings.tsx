import { Typography, Box, Card, CardContent, Button, Grid, TextField } from '@mui/material';

const Settings = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Paramètres
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Gérez les paramètres de votre compte
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Compte
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    defaultValue="amadou.diallo@example.com"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Téléphone"
                    defaultValue="+33 6 12 34 56 78"
                  />
                </Grid>
              </Grid>
              <Box sx={{ mt: 3 }}>
                <Button variant="contained" color="secondary">
                  Enregistrer les modifications
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Sécurité
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }}>
                Changer le mot de passe
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
