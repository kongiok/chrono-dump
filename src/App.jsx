import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Globals.css'
import DashBoard from './pages/DashBoard'
import { ReactLocation, Router } from '@tanstack/react-location';

function App() {

  const routes = [{
    path: '/',
    element: <DashBoard />,
  }];
  const location = new ReactLocation();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location}
        routes={routes} />
    </QueryClientProvider>
  )
}

export default App
