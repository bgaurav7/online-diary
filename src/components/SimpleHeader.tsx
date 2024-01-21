import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Stack from '@mui/joy/Stack';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import { useColorScheme } from '@mui/joy/styles';
import * as React from 'react';

import BookRoundedIcon from '@mui/icons-material/BookRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

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

export default function Header() {
  const [open, setOpen] = React.useState(false);
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
              src="https://i.pravatar.cc/40?img=2"
              srcSet="https://i.pravatar.cc/80?img=2"
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
            <MenuItem>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/40?img=2"
                  srcSet="https://i.pravatar.cc/80?img=2"
                  sx={{ borderRadius: '50%' }}
                />
                <Box sx={{ ml: 1.5 }}>
                  <Typography level="title-sm" textColor="text.primary">
                    Gaurav Bansal
                  </Typography>
                  <Typography level="body-xs" textColor="text.tertiary">
                    me@bgaurav.in
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <ListDivider />
            <MenuItem>
              <HelpRoundedIcon />
              Help
            </MenuItem>
            <MenuItem>
              <SettingsRoundedIcon />
              Settings
            </MenuItem>
            <ListDivider />
            <MenuItem component="a" href="/blog/first-look-at-joy/">
              GBs Online Diary
              <OpenInNewRoundedIcon />
            </MenuItem>
            <MenuItem
              component="a"
              href="https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/email"
            >
              Sourcecode
              <OpenInNewRoundedIcon />
            </MenuItem>
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
            href="https://github.com"
            target="_blank"
            sx={{ alignSelf: 'center' }}
          >
            <BookRoundedIcon />
          </IconButton>
        </Tooltip>
        <ColorSchemeToggle />
      </Box>
    </Box>
  );
}
