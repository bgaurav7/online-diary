import * as React from 'react';

import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import Stack from '@mui/joy/Stack';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import { useColorScheme } from '@mui/joy/styles';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import XIcon from '@mui/icons-material/X';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <Tooltip title="Change theme" variant="outlined">
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        sx={{ alignSelf: 'center' }}
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

function BioCard() {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: '100%',
        boxShadow: 'lg',
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar src="/assets/images/me-square.jpg" sx={{ '--Avatar-size': '4rem' }} />
        <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            mt: -1,
            mb: 1,
            border: '3px solid',
            borderColor: 'background.surface',
          }}
        >
          @bgaurav7
        </Chip>
        <Typography level="title-lg">Gaurav Bansal</Typography>
        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer and I
          love to code.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 2,
            '& > button': { borderRadius: '2rem' },
          }}
        >
          <IconButton size="sm" variant="plain" color="neutral" component="a" target="_blank" href="https://www.facebook.com/bgaurav7">
            <FacebookRoundedIcon />
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral" component="a" target="_blank" href="https://www.instagram.com/bgaurav7">
            <InstagramIcon />
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral" component="a" target="_blank" href="https://twitter.com/bgaurav7_">
            <XIcon />
          </IconButton>
          <IconButton size="sm" variant="plain" color="neutral" component="a" target="_blank" href="https://github.com/bgaurav7">
            <GitHubIcon />
          </IconButton>
        </Box>
      </CardContent>
      {/* <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
            <Button>Message</Button>
            <Button>Connect</Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow> */}
    </Card>
  );
}

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ display: { xs: 'flex', sm: 'flex' } }}
      >
        <Dropdown>
          <MenuButton
            variant="plain"
            size="sm"
            sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
          >
            <Avatar
              src="/assets/images/me-square.jpg"
              srcSet="/assets/images/me-square.jpg"
              sx={{ maxWidth: '32px', maxHeight: '32px' }}
            />
          </MenuButton>
          <Menu
            placement="bottom-end"
            size="sm"
            sx={{
              zIndex: '99999',
              p: 1,
              gap: 1,
              '--ListItem-radius': 'var(--joy-radius-sm)',
            }}
          >
            <BioCard />
          </Menu>
        </Dropdown>
        <ButtonGroup
          aria-label="radius button group"
          sx={{ '--ButtonGroup-radius': '10px' }}
        >
          <Button
            // aria-pressed="true"
            component="a"
            href="/"
            size="md"
            sx={{ alignSelf: 'center' }}
          >
            About
          </Button>
          <Button
            component="a"
            href="/articles/"
            size="md"
            sx={{ alignSelf: 'center' }}
          >
            Articles
          </Button>
          <Button
            component="a"
            href="/resume/"
            size="md"
            sx={{ alignSelf: 'center' }}
          >
            Resume
          </Button>
        </ButtonGroup>
      </Stack>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'row',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        <Tooltip title="Github Repo" variant="outlined">
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            component="a"
            href="https://github.com/bgaurav7/online-diary"
            target="_blank"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <ColorSchemeToggle />
      </Box>
    </Box>
  );
}
