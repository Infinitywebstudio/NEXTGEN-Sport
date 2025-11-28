import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  EmojiEvents as TrophyIcon,
  FolderOpen as FolderIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 260;

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  const theme = useTheme();

  const menuItems = [
    { id: 'overview', label: "Vue d'ensemble", icon: <DashboardIcon /> },
    { id: 'profile', label: 'Mon Profil', icon: <PersonIcon /> },
    { id: 'experience', label: 'Parcours', icon: <TrophyIcon /> },
    { id: 'portfolio', label: 'Portfolio', icon: <FolderIcon /> },
    { id: 'chat', label: 'Chat', icon: <ChatIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        },
      }}
    >
      <Box sx={{ height: 64 }} /> {/* Spacer for TopBar */}

      <List sx={{ px: 2, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={() => onNavigate(item.id)}
            selected={currentPage === item.id}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&.Mui-selected': {
                bgcolor: 'rgba(248, 112, 40, 0.1)',
                color: 'secondary.main',
                '&:hover': {
                  bgcolor: 'rgba(248, 112, 40, 0.15)',
                },
                '& .MuiListItemIcon-root': {
                  color: 'secondary.main',
                },
              },
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: currentPage === item.id ? 600 : 500,
                fontSize: '0.95rem',
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
export { DRAWER_WIDTH };
