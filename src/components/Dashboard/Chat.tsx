import { useState } from 'react';
import {
  Typography,
  Box,
  Card,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  IconButton,
  Badge,
  Divider,
  InputAdornment,
  Grid,
} from '@mui/material';
import {
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isMine: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    name: 'Pierre Martin',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'Salut ! J\'ai vu ton profil, très impressionnant !',
    time: '10:30',
    unread: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Sophie Dubois',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Félicitations pour tes performances !',
    time: 'Hier',
    unread: 0,
    online: false,
  },
  {
    id: '3',
    name: 'Thomas Bernard',
    avatar: 'https://i.pravatar.cc/150?img=33',
    lastMessage: 'On peut discuter de ton avenir ?',
    time: 'Lun',
    unread: 1,
    online: true,
  },
  {
    id: '4',
    name: 'Marie Lefebvre',
    avatar: 'https://i.pravatar.cc/150?img=25',
    lastMessage: 'Merci pour ta réponse !',
    time: 'Dim',
    unread: 0,
    online: false,
  },
];

const mockMessages: Message[] = [
  {
    id: 'm1',
    senderId: '1',
    content: 'Salut Amadou ! Comment vas-tu ?',
    timestamp: '10:25',
    isMine: false,
  },
  {
    id: 'm2',
    senderId: 'me',
    content: 'Salut Pierre ! Ça va bien merci, et toi ?',
    timestamp: '10:26',
    isMine: true,
  },
  {
    id: 'm3',
    senderId: '1',
    content: 'J\'ai vu ton profil, très impressionnant ! Tu es disponible pour un entretien la semaine prochaine ?',
    timestamp: '10:28',
    isMine: false,
  },
  {
    id: 'm4',
    senderId: 'me',
    content: 'Merci beaucoup ! Oui je suis disponible. Quel jour te conviendrait ?',
    timestamp: '10:29',
    isMine: true,
  },
  {
    id: 'm5',
    senderId: '1',
    content: 'Que dirais-tu de mardi prochain à 14h ?',
    timestamp: '10:30',
    isMine: false,
  },
];

const Chat = () => {
  const [selectedConv, setSelectedConv] = useState<Conversation>(mockConversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Chat
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Messagerie instantanée
      </Typography>

      <Card sx={{ height: '70vh', display: 'flex' }}>
        <Grid container sx={{ height: '100%' }}>
          {/* Conversations List */}
          <Grid item xs={12} md={4} sx={{ borderRight: 1, borderColor: 'divider' }}>
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <List sx={{ p: 0, overflowY: 'auto', maxHeight: 'calc(70vh - 80px)' }}>
              {mockConversations.map((conv) => (
                <Box key={conv.id}>
                  <ListItemButton
                    selected={selectedConv.id === conv.id}
                    onClick={() => setSelectedConv(conv)}
                    sx={{ px: 2, py: 1.5 }}
                  >
                    <ListItemAvatar>
                      <Badge
                        color="success"
                        variant="dot"
                        invisible={!conv.online}
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      >
                        <Avatar src={conv.avatar} />
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body1" fontWeight={conv.unread > 0 ? 600 : 400}>
                            {conv.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {conv.time}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                          sx={{ fontWeight: conv.unread > 0 ? 500 : 400 }}
                        >
                          {conv.lastMessage}
                        </Typography>
                      }
                    />
                    {conv.unread > 0 && (
                      <Badge badgeContent={conv.unread} color="secondary" sx={{ ml: 1 }} />
                    )}
                  </ListItemButton>
                  <Divider />
                </Box>
              ))}
            </List>
          </Grid>

          {/* Messages Area */}
          <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <Box
              sx={{
                p: 2,
                borderBottom: 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Badge
                color="success"
                variant="dot"
                invisible={!selectedConv.online}
                overlap="circular"
              >
                <Avatar src={selectedConv.avatar} />
              </Badge>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  {selectedConv.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {selectedConv.online ? 'En ligne' : 'Hors ligne'}
                </Typography>
              </Box>
            </Box>

            {/* Messages */}
            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3 }}>
              {mockMessages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    display: 'flex',
                    justifyContent: msg.isMine ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '70%',
                      bgcolor: msg.isMine ? 'secondary.main' : 'grey.100',
                      color: msg.isMine ? 'white' : 'text.primary',
                      borderRadius: 2,
                      p: 1.5,
                    }}
                  >
                    <Typography variant="body2">{msg.content}</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        mt: 0.5,
                        opacity: 0.8,
                        textAlign: 'right',
                      }}
                    >
                      {msg.timestamp}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
              <TextField
                fullWidth
                placeholder="Écrire un message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton size="small">
                        <AttachFileIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="secondary"
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Chat;
