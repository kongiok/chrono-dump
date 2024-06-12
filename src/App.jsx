import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Markdown } from './components/sections/Markdown.section';
import { Base as DocumentBase } from '@/components/layouts/Document.layout.jsx';
import { Base as AppBase } from '@/components/layouts/App.layout.jsx';
import Landing from './pages/Landing.page.mdx';


const routes = [
  {
    path: "/",
    element: <DocumentBase />,
    children: [
      {
        path: '',
        element: <Markdown><Landing /></Markdown>,
      }
    ],
  },
  {
    path: "/app",
    element: <AppBase />,
    children: [
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <ToastContainer />
    </>
  )
}

export default App
