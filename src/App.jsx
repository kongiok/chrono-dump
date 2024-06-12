import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Markdown } from './components/sections/Markdown.section';
import { Base as DocumentBase } from '@/components/layouts/Document.layout';
import Landing from './pages/Landing.page.mdx';
import { MdHome, MdOutlineTimelapse } from 'react-icons/md';


const navItems = [
  {
    href: "/app",
    title: "Home",
    icon: <MdHome />,
  },
  {
    href: "/app/timer",
    title: "Pomodoro",
    icon: <MdOutlineTimelapse />,
  }
];

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
