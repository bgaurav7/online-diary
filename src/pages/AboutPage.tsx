import * as React from 'react';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function AboutPage() {
  return (
    <TwoSidedLayout>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Gaurav Bansal
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Just give me a dream and I will code it.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        At JioTesseract, we are committed to democratizing mixed reality by providing developers with the tools they need to create faster and more efficient mixed reality experiences. With my expertise in full-stack web and Android development, as well as my passion for machine learning and image processing, I strive to drive innovation in the field and make mixed reality accessible to all.
      </Typography>
      <Button 
        component="a"
        href="/articles/"
        size="lg"
        endDecorator={<ArrowForward />} >
        Articles
      </Button>
      <Typography>
        Want to reach out? <Link fontWeight="lg">Email</Link>
      </Typography>
    </TwoSidedLayout>
  );
}
