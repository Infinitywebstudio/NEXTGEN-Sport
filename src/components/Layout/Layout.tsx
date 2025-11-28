import { Box } from '@mui/material';
import TopBar from './TopBar';
import Sidebar, { DRAWER_WIDTH } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  user: {
    firstName: string;
    lastName: string;
    avatar: string;
    role: string;
  };
}

const Layout = ({ children, currentPage, onNavigate, user }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <TopBar user={user} onNavigate={onNavigate} />
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
