import { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  Switch,
  FormControlLabel,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as BankIcon,
} from '@mui/icons-material';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4?: string;
  email?: string;
  cardType?: string;
  expiryDate?: string;
  isDefault: boolean;
}

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 'pm1',
    type: 'card',
    last4: '4242',
    cardType: 'Visa',
    expiryDate: '12/25',
    isDefault: true,
  },
  {
    id: 'pm2',
    type: 'paypal',
    email: 'amadou.diallo@example.com',
    isDefault: false,
  },
];

const Settings = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(mockPaymentMethods);
  const [openAddPayment, setOpenAddPayment] = useState(false);
  const [paymentType, setPaymentType] = useState<'card' | 'paypal'>('card');

  const handleAddPayment = () => {
    setOpenAddPayment(true);
  };

  const handleClosePayment = () => {
    setOpenAddPayment(false);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Paramètres
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Gérez les paramètres de votre compte
      </Typography>

      <Grid container spacing={3}>
        {/* Account Settings */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Compte
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    defaultValue="amadou.diallo@example.com"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Téléphone"
                    defaultValue="+33 6 12 34 56 78"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="secondary">
                    Enregistrer les modifications
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Security */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Sécurité
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Mot de passe
                </Typography>
                <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                  Dernière modification il y a 2 mois
                </Typography>
                <Button variant="outlined" sx={{ mt: 2 }}>
                  Changer le mot de passe
                </Button>
              </Box>
              <Divider sx={{ my: 3 }} />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Authentification à deux facteurs"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Payment Methods */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight={600}>
                  Moyens de paiement
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddPayment}
                  startIcon={<CreditCardIcon />}
                >
                  Ajouter un moyen de paiement
                </Button>
              </Box>
              <List>
                {paymentMethods.map((pm) => (
                  <ListItem
                    key={pm.id}
                    sx={{
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ mr: 2 }}>
                      {pm.type === 'card' ? (
                        <CreditCardIcon color="action" />
                      ) : (
                        <BankIcon color="action" />
                      )}
                    </Box>
                    <ListItemText
                      primary={
                        <Box display="flex" alignItems="center" gap={1}>
                          {pm.type === 'card'
                            ? `${pm.cardType} •••• ${pm.last4}`
                            : `PayPal (${pm.email})`}
                          {pm.isDefault && (
                            <Chip label="Par défaut" size="small" color="secondary" />
                          )}
                        </Box>
                      }
                      secondary={pm.type === 'card' ? `Expire ${pm.expiryDate}` : ''}
                    />
                    <ListItemSecondaryAction>
                      {!pm.isDefault && (
                        <Button size="small" sx={{ mr: 1 }}>
                          Définir par défaut
                        </Button>
                      )}
                      <IconButton edge="end" sx={{ mr: 1 }}>
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton edge="end" color="error">
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Réseaux sociaux
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Instagram"
                    placeholder="@username"
                    defaultValue="@amadoudiallo"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Twitter"
                    placeholder="@username"
                    defaultValue="@amadoudiallo"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Facebook"
                    placeholder="URL du profil"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="YouTube"
                    placeholder="URL de la chaîne"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="LinkedIn"
                    placeholder="URL du profil"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="secondary">
                    Enregistrer les liens
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Notifications
              </Typography>
              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Notifications par email"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Nouveaux messages"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Vues du profil"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Newsletter hebdomadaire"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Privacy */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Confidentialité
              </Typography>
              <Box sx={{ mt: 2 }}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Profil public"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Afficher mon statut en ligne"
                />
                <FormControlLabel
                  control={<Switch />}
                  label="Autoriser les messages de non-contacts"
                />
              </Box>
              <Divider sx={{ my: 2 }} />
              <Button variant="outlined" color="error">
                Supprimer mon compte
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add Payment Method Dialog */}
      <Dialog open={openAddPayment} onClose={handleClosePayment} maxWidth="sm" fullWidth>
        <DialogTitle>Ajouter un moyen de paiement</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={paymentType}
                label="Type"
                onChange={(e) => setPaymentType(e.target.value as 'card' | 'paypal')}
              >
                <MenuItem value="card">Carte bancaire</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            </FormControl>

            {paymentType === 'card' ? (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Numéro de carte" placeholder="1234 5678 9012 3456" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Nom sur la carte" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Date d'expiration" placeholder="MM/AA" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CVV" placeholder="123" />
                </Grid>
              </Grid>
            ) : (
              <TextField fullWidth label="Email PayPal" type="email" />
            )}

            <FormControlLabel
              control={<Switch />}
              label="Définir comme moyen de paiement par défaut"
              sx={{ mt: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePayment}>Annuler</Button>
          <Button onClick={handleClosePayment} variant="contained" color="secondary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Settings;
