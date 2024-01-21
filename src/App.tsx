import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import * as React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SimpleHeader from './components/SimpleHeader';
import Layout from './layout';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
      path: "/",
      element: <AboutPage />,
      errorElement: <ErrorPage />,
  },
  {
    path: "/articles",
    element: <ArticlePage />,
    errorElement: <ErrorPage />,
  }
]);

export default function OnlineDiary() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Layout.Root
        sx={{
          ...({
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
          <SimpleHeader />
        </Layout.Header>
        {/* <Layout.SideNav>
          <Navigation />
        </Layout.SideNav> */}
        <Layout.Page>
          <React.StrictMode>
              <RouterProvider router={router} />
          </React.StrictMode>
        </Layout.Page>
      </Layout.Root>
    </CssVarsProvider>
  );
}
