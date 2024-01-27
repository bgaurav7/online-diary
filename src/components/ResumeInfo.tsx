import * as React from 'react';

import Check from '@mui/icons-material/Check';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

import AspectRatio from '@mui/joy/AspectRatio';
import Sheet from '@mui/joy/Sheet';

export function UserCard() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            Alex Morrison
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Senior Journalist
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function ResumeInfo() {
  return (
    <Box
      sx={{
        width: '100%',
        gap: 1,
        p: 2,
      }}
    >
      <Card size="lg" variant="outlined">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <Typography level="h1" color="primary">Gaurav Bansal</Typography>
            <Typography level="h4">Co-Founder, JioTesseract</Typography>
          </div>
          <AspectRatio maxHeight={192} sx={{ minWidth: 192, display: {xs:'none', sm: 'inherit'} }} >
            <img
              src="/assets/images/me-original.jpg"
              srcSet="/assets/images/me-original.jpg"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </Box>
        <Divider inset="none" />
        <Typography level="h4" color="primary">Education</Typography>
        <Sheet
          sx={{
            bgcolor: 'background.level1',
            borderRadius: 'sm',
            p: 1.5,
            display: 'flex',
            gap: 2,
            '& > div': { flex: 1 },
          }}
        >
          <div>
            <Typography level="title-md">Indian Institute of Infromation Technology</Typography>
            <Typography level="body-md">July 2016 - B.Tech. IT Hons.</Typography>
            <Typography level="body-sm">CGPA: 9.03 / 10</Typography>
          </div>
          <div>
            <Typography fontWeight="lg">Sprint Fields Public School</Typography>
            <Typography level="body-md">March 2012 - Class XII</Typography>
            <Typography level="body-sm">Percentage: 86%</Typography>
          </div>
        </Sheet>
        <Divider inset="none" />
        <Typography level="h4" color="primary">Professional Skillset</Typography>
        <List size="md" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Android
          </ListItem>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Backend
          </ListItem>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Machine Learning
          </ListItem>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            AI
          </ListItem>
        </List>
        <Typography level="h4" color="primary">Areas of Interest</Typography>
        <List size="md" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Product Design
          </ListItem>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Techincal Management
          </ListItem>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Leadership Building
          </ListItem>
          <ListItem>
            <ListItemDecorator><Check /></ListItemDecorator>
            Agile
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="title-lg" sx={{ mr: 'auto' }}>
            
          </Typography>
          <Button
            variant="soft"
            color="primary"
            endDecorator={<FileDownloadOutlinedIcon />}
          >
            Downdload CV
          </Button>
        </CardActions>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
              Mumbai, India
            </Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
              Jan 2024
            </Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    </Box>
  );
}
