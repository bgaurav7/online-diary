import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import * as React from 'react';

import SimpleHeader from './components/SimpleHeader';
import Layout from './layout';
import ArticlePage from './pages/ArticlePage';

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
          <ArticlePage />
        </Layout.Page>
      </Layout.Root>
    </CssVarsProvider>
  );
}
