import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './Globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Markdown } from './components/sections/Markdown.section';
import { Base as DocumentBase } from '@/components/layouts/Document.layout.jsx';
import { Base as AppBase } from '@/components/layouts/App.layout.jsx';
import Landing from './pages/Landing.page.mdx';
import { TaskDash } from '@/components/layouts/Tasks.layout.jsx';
import { Settings } from './pages/Settings.page';
import { Timer } from './pages/Timer.page';
import React from "react";

const routes = [
  { path: "/", element: <DocumentBase />,
    children: [
      { path: '', element: <Markdown><Landing /></Markdown>, }
    ],
  },
  { path: "/app", element: <AppBase />,
    children: [
      { path: '', element: <TaskDash />, },
      { path: 'timer', element: <Timer />, },
      { path: 'settings', element: <Settings />, }
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
  );
}

export default App;