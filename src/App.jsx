import React from 'react';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FlightsPage from './pages/FlightsPage';

function App() {
  const [page, setPage] = React.useState('home');

  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/search') {
        setPage('search');
      } else if (path === '/flights') {
        setPage('flights');
      } else {
        setPage('home');
      }
    };

    handleNavigation();
    
    document.addEventListener('click', (e) => {
      const target = e.target;
      const anchor = target.closest('a');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (['/search', '/', '/flights'].includes(href)) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          handleNavigation();
        }
      }
    });

    window.addEventListener('popstate', handleNavigation);
    
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {page === 'home' && <HomePage />}
      {page === 'search' && <SearchPage />}
      {page === 'flights' && <FlightsPage />}
    </div>
  );
}

export default App;