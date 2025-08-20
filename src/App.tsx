// Styles
import './styling/main.scss';

// Components
import { Countries } from './pages/countries/Countries';

// Providers
import { ThemeProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Countries />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
