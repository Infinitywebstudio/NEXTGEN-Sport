import { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Upload as UploadIcon,
  PlayCircle as PlayIcon,
  Favorite as FavoriteIcon,
  Visibility as VisibilityIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

interface Media {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
  date: string;
  type: 'video' | 'image';
}

const mockVideos: Media[] = [
  {
    id: 'v1',
    title: 'Match highlights - Paris FC vs Lyon',
    thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop',
    views: 1243,
    likes: 87,
    date: '2025-01-15',
    type: 'video',
  },
  {
    id: 'v2',
    title: 'Entraînement technique - Dribbles',
    thumbnail: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=250&fit=crop',
    views: 856,
    likes: 62,
    date: '2025-01-10',
    type: 'video',
  },
  {
    id: 'v3',
    title: 'But marquant en finale U19',
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=250&fit=crop',
    views: 2134,
    likes: 156,
    date: '2024-12-20',
    type: 'video',
  },
];

const mockImages: Media[] = [
  {
    id: 'i1',
    title: 'Photo officielle équipe U19',
    thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=250&fit=crop',
    views: 543,
    likes: 45,
    date: '2025-01-01',
    type: 'image',
  },
  {
    id: 'i2',
    title: 'Action de jeu - Match amical',
    thumbnail: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=250&fit=crop',
    views: 678,
    likes: 52,
    date: '2024-12-28',
    type: 'image',
  },
  {
    id: 'i3',
    title: 'Célébration but victoire',
    thumbnail: 'https://images.unsplash.com/photo-1600077106724-946750eeaf8c?w=400&h=250&fit=crop',
    views: 923,
    likes: 78,
    date: '2024-12-15',
    type: 'image',
  },
  {
    id: 'i4',
    title: 'Session d\'entraînement',
    thumbnail: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=250&fit=crop',
    views: 412,
    likes: 34,
    date: '2024-12-10',
    type: 'image',
  },
];

const Portfolio = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const MediaCard = ({ media }: { media: Media }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={media.thumbnail}
          alt={media.title}
        />
        {media.type === 'video' && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <PlayIcon sx={{ fontSize: 60, color: 'white', opacity: 0.9 }} />
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          {media.title}
        </Typography>
        <Box display="flex" gap={2} mt={1}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <VisibilityIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {media.views.toLocaleString()}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <FavoriteIcon fontSize="small" color="action" />
            <Typography variant="caption" color="text.secondary">
              {media.likes}
            </Typography>
          </Box>
        </Box>
        <Typography variant="caption" color="text.secondary" display="block" mt={1}>
          {new Date(media.date).toLocaleDateString('fr-FR')}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Box display="flex" gap={1}>
          <IconButton size="small" color="primary">
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" color="error">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );

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
          component="label"
        >
          Upload
          <input hidden accept="image/*,video/*" type="file" multiple />
        </Button>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label={`Vidéos (${mockVideos.length})`} />
          <Tab label={`Images (${mockImages.length})`} />
        </Tabs>
      </Box>

      {/* Videos Tab */}
      {tabValue === 0 && (
        <Grid container spacing={3}>
          {mockVideos.map((video) => (
            <Grid item xs={12} sm={6} md={4} key={video.id}>
              <MediaCard media={video} />
            </Grid>
          ))}
        </Grid>
      )}

      {/* Images Tab */}
      {tabValue === 1 && (
        <Grid container spacing={3}>
          {mockImages.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <MediaCard media={image} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Portfolio;
