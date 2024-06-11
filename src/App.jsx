import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Globals.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Markdown } from './components/sections/Markdown.section';
import { Task } from "@/pages/Tasks/Tasks.dash.jsx";
import { Pomodoro } from '@/pages/Pomodoro.dash';
import Landing from './pages/Landing.page.mdx';
import { Base as DocumentBase } from './components/templates/Base/Document.template';
import { Base as AppBase } from './components/templates/Base/App.template';
import { MdHome, MdOutlineTimelapse } from 'react-icons/md';
import { Login } from './pages/Login.page.jsx';
import { Dialog } from './components/sections/Dialog.section.jsx';


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
  {
    path: 'app',
    element: <AppBase navItem={navItems} />,
    children: [
      {
        path: '',
        element: <Task />,
      },
      {
        path: 'timer',
        element: <Pomodoro />,
      },
      {
        path: 'login',
        element: <Login />,
      }
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
