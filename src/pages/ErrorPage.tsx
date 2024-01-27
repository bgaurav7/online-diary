import * as React from 'react';

import ArrowForward from '@mui/icons-material/ArrowForward';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { useRouteError } from "react-router-dom";
import OneSidedLayout from '../components/OneSidedLayout';

export default function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <OneSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Oops!
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        {error.message}
      </Typography>
      <Button 
        component="a"
        href="/"
        size="lg"
        endDecorator={<ArrowForward />}>
        Home
      </Button>
    </OneSidedLayout>
  );
}
