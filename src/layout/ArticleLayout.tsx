import * as React from 'react';

import Box, { BoxProps } from '@mui/joy/Box';

function Root(props: BoxProps) {
  return (
    <Box
      className="ArticlesRoot"
      {...props}
      sx={[
        {
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(200px, 350px) minmax(400px, 1fr)',
            md: 'minmax(350px, 400px) minmax(600px, 1fr)',
          },
          gridTemplateRows: '1fr',
          minHeight: '100%',
          overflow: 'hidden'
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SidePane(props: BoxProps) {
  return (
    <Box
      className="ArticlesSidePane"
      {...props}
      sx={[
        {
          bgcolor: 'background.surface',
          borderRight: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'initial',
          height: {
            sm: 'calc(100vh - 64px)'
          },
          overflow: 'auto'
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function BottomBar(props: BoxProps) {
  return (
    <Box
      className="ArticlesBottomBar"
      {...props}
      sx={[
        {
          bgcolor: 'background.surface',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: {
            xs: 'initial',
            sm: 'none',
          },
          position: 'sticky',
          height: '76px',
          bottom: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Content(props: BoxProps) {
  return (
    <Box
      className="ArticlesContent"
      {...props}
      sx={[{
        p: {
          xs: 2,
          md: 4
        },
        height: {
          xs: 'calc(100vh - 64px - 76px)',
          sm: 'calc(100vh - 64px)',
        },
        overflow: 'auto'
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    />
  );
}

export default {
  Root,
  SidePane,
  BottomBar,
  Content,
};
