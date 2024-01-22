import * as React from 'react';
import { FocusTrap } from '@mui/base/FocusTrap';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';

import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

import ArticlesLayout from '../layout/ArticleLayout';
import ArticleList from '../components/ArticleList';
import ArticleContent from '../components/ArticleContent';
import WriteEmail from '../components/ArticleEdit';
import Navigation from '../components/Navigation';

export default function ArticlesPage() {
  const [open, setOpen] = React.useState(true);

  return (
    <ArticlesLayout.Root>
        <ArticlesLayout.SidePane>
          <ArticleList />
        </ArticlesLayout.SidePane>
        {/* <ArticlesLayout.SidePane>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
            <Box sx={{ alignItems: 'center', gap: 1 }}>
                <Typography level="title-lg" textColor="text.secondary">
                My Articles
                </Typography>
                <Typography level="title-sm" textColor="text.tertiary">
                5 articles
                </Typography>
            </Box>
            <Button
                size="sm"
                startDecorator={<CreateRoundedIcon />}
                onClick={() => setOpen(true)}
                sx={{ ml: 'auto' }}
            >
                Compose email
            </Button>
            <FocusTrap open={open} disableAutoFocus disableEnforceFocus>
                <WriteEmail open={open} onClose={() => setOpen(false)} />
            </FocusTrap>
            </Box>
            <ArticleList />
        </ArticlesLayout.SidePane> */}
        <ArticlesLayout.Content>
            <ArticleContent />
        </ArticlesLayout.Content>
    </ArticlesLayout.Root>
  );
}
