import * as React from 'react';
import { FocusTrap } from '@mui/base/FocusTrap';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

import ArticlesLayout from '../layout/ArticleLayout';
import Mails from '../components/ArticleList';
import EmailContent from '../components/ArticleContent';
import WriteEmail from '../components/ArticleEdit';

export default function ArticlesPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <ArticlesLayout.Root>
        <ArticlesLayout.SidePane>
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
                My inbox
                </Typography>
                <Typography level="title-sm" textColor="text.tertiary">
                5 emails
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
            <Mails />
        </ArticlesLayout.SidePane>
        <ArticlesLayout.Content>
            <EmailContent />
        </ArticlesLayout.Content>
    </ArticlesLayout.Root>
  );
}
