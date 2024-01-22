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
          borderColor: 'divider',
          display: {
            xs: 'none',
            sm: 'initial',
          },
          height: 'calc(100vh - 64px)',
          overflow: 'auto'
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
        height: 'calc(100vh - 64px)',
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
  Content,
};
