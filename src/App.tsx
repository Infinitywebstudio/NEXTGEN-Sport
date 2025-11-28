import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import Layout from './components/Layout/Layout';
import Overview from './components/Dashboard/Overview';
import Profile from './components/Dashboard/Profile';
import Experience from './components/Dashboard/Experience';
import Portfolio from './components/Dashboard/Portfolio';
import Chat from './components/Dashboard/Chat';
import Settings from './components/Dashboard/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');

  const user = {
    firstName: 'Amadou',
    lastName: 'DIALLO',
    avatar: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=150&h=150&fit=crop',
    role: 'Talent - Attaquant',
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'profile':
        return <Profile />;
      case 'experience':
        return <Experience />;
      case 'portfolio':
        return <Portfolio />;
      case 'chat':
        return <Chat />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        user={user}
      >
        {renderContent()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
