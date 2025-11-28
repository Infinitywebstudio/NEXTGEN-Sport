import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Favorite as FavoriteIcon,
  PlayCircle as PlayIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Mock data
const viewsData = [
  { name: 'Lun', views: 120 },
  { name: 'Mar', views: 190 },
  { name: 'Mer', views: 150 },
  { name: 'Jeu', views: 280 },
  { name: 'Ven', views: 320 },
  { name: 'Sam', views: 410 },
  { name: 'Dim', views: 350 },
];

const engagementData = [
  { name: 'Sem 1', likes: 45, videos: 12 },
  { name: 'Sem 2', likes: 67, videos: 18 },
  { name: 'Sem 3', likes: 89, videos: 24 },
  { name: 'Sem 4', likes: 123, videos: 31 },
];

const recentMessages = [
  {
    id: '1',
    name: 'Pierre Martin',
    avatar: 'https://i.pravatar.cc/150?img=12',
    message: 'Salut ! J\'ai vu ton profil...',
    time: 'Il y a 5 min',
    unread: true,
  },
  {
    id: '2',
    name: 'Sophie Dubois',
    avatar: 'https://i.pravatar.cc/150?img=47',
    message: 'Félicitations pour tes performances !',
    time: 'Il y a 1h',
    unread: true,
  },
  {
    id: '3',
    name: 'Thomas Bernard',
    avatar: 'https://i.pravatar.cc/150?img=33',
    message: 'On peut discuter de ton avenir ?',
    time: 'Il y a 3h',
    unread: false,
  },
];

const StatsCard = ({ icon, title, value, change, color }: any) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
            {value.toLocaleString()}
          </Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <TrendingUpIcon fontSize="small" sx={{ color: '#8fc92f' }} />
            <Typography variant="caption" sx={{ color: '#8fc92f', fontWeight: 600 }}>
              {change}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ce mois
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            bgcolor: `${color}15`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: color,
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Overview = () => {
  return (
    <Box>
      <Typography variant="h4" fontWeight={800} gutterBottom>
        Vue d'ensemble
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Suivez vos performances et votre engagement
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<VisibilityIcon sx={{ fontSize: 28 }} />}
            title="Vues du Profil"
            value={1247}
            change="+12%"
            color="#f87028"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<FavoriteIcon sx={{ fontSize: 28 }} />}
            title="Likes"
            value={456}
            change="+24%"
            color="#f87028"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<PlayIcon sx={{ fontSize: 28 }} />}
            title="Lectures Vidéo"
            value={3542}
            change="+18%"
            color="#8fc92f"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            icon={<TrendingUpIcon sx={{ fontSize: 28 }} />}
            title="Abonnés"
            value={186}
            change="+8%"
            color="#667eea"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Views Chart */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Vues du Profil (7 derniers jours)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={viewsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#f87028"
                    strokeWidth={3}
                    dot={{ fill: '#f87028', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Messages Preview */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6" fontWeight={600}>
                  Messages récents
                </Typography>
                <Chip label="3 nouveaux" size="small" color="secondary" />
              </Box>
              <List sx={{ p: 0 }}>
                {recentMessages.map((msg) => (
                  <ListItem
                    key={msg.id}
                    sx={{
                      px: 0,
                      py: 1.5,
                      borderRadius: 2,
                      '&:hover': { bgcolor: 'action.hover' },
                      cursor: 'pointer',
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={msg.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2" fontWeight={msg.unread ? 600 : 400}>
                          {msg.name}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary" noWrap>
                          {msg.message}
                        </Typography>
                      }
                    />
                    {msg.unread && (
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: 'secondary.main',
                        }}
                      />
                    )}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Engagement Chart */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Engagement (4 dernières semaines)
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="likes" fill="#f87028" radius={[8, 8, 0, 0]} name="Likes" />
                  <Bar dataKey="videos" fill="#8fc92f" radius={[8, 8, 0, 0]} name="Vidéos vues" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
