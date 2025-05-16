import React from 'react';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  // Simple routing - in a real app you would use a proper router
  const [page, setPage] = React.useState('home');

  // Manually handle navigation
  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/search') {
        setPage('search');
      } else {
        setPage('home');
      }
    };

    handleNavigation();
    
    // Set up navigation between pages
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href') === '/search') {
        e.preventDefault();
        window.history.pushState({}, '', '/search');
        setPage('search');
      } else if (anchor && anchor.getAttribute('href') === '/') {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        setPage('home');
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
    </div>
  );
}

export default App;