import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Badge,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

interface TopBarProps {
  user: {
    firstName: string;
    lastName: string;
    avatar: string;
    role: string;
  };
  onNavigate: (page: string) => void;
}

const TopBar = ({ user, onNavigate }: TopBarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (action: string) => {
    handleClose();
    if (action === 'profile') {
      onNavigate('profile');
    } else if (action === 'settings') {
      onNavigate('settings');
    } else if (action === 'logout') {
      console.log('Logout clicked');
      // Implement logout logic
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'background.paper',
        boxShadow: 1,
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h5" fontWeight={800} sx={{ color: 'text.primary' }}>
            NEXGEN <span style={{ color: '#f87028' }}>SPORT</span>
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          {/* Notifications */}
          <IconButton>
            <Badge badgeContent={3} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Profile Dropdown */}
          <Box
            onClick={handleClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              px: 2,
              py: 1,
              borderRadius: 2,
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <Avatar
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              sx={{ width: 40, height: 40 }}
            />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Typography variant="body2" fontWeight={600}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {user.role}
              </Typography>
            </Box>
          </Box>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 3,
              sx: {
                mt: 1.5,
                minWidth: 220,
                borderRadius: 2,
                '& .MuiMenuItem-root': {
                  px: 2,
                  py: 1.5,
                  borderRadius: 1,
                  mx: 0.5,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <Box sx={{ px: 2, py: 1.5 }}>
              <Typography variant="subtitle2" fontWeight={600}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {user.role}
              </Typography>
            </Box>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={() => handleMenuClick('profile')}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Mon Profil
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick('settings')}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              Paramètres
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={() => handleMenuClick('logout')}
              sx={{ color: 'error.main' }}
            >
              <ListItemIcon>
                <LogoutIcon fontSize="small" color="error" />
              </ListItemIcon>
              Déconnexion
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
