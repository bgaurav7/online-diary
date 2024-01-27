import * as React from 'react';

import Box, { BoxProps } from '@mui/joy/Box';

function Root(props: BoxProps) {
  return (
    <Box
      className="ResumeRoot"
      {...props}
      sx={[
        {
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '0.5fr 0.5fr'
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

function InfoPane(props: BoxProps) {
  return (
    <Box
      className="ResumeInfoPane"
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

function ExperiencePane(props: BoxProps) {
  return (
    <Box
      className="ResumeExperiencePane"
      {...props}
      sx={[{
        p: {
          xs: 2,
          md: 4
        },
        height: {
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
  InfoPane,
  ExperiencePane
};
