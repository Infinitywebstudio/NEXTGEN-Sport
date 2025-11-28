import { Typography, Box, Card, CardContent } from '@mui/material';

const Chat = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Chat
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Messagerie instantanée
      </Typography>

      <Card>
        <CardContent>
          <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" color="text.secondary" align="center">
              Sélectionnez une conversation pour commencer
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Chat;
