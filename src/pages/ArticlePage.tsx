import * as React from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';

import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

import ArticleContent from '../components/ArticleContent';
import ArticleList from '../components/ArticleList';
import ArticlesLayout from '../layout/ArticleLayout';

export default function ArticlesPage() {
    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(1);

    const handleIndexChange = (index: number) => {
        setActiveIndex(index)
    };

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
                        Current Article
                        </Typography>
                        <Typography level="title-sm" textColor="text.tertiary">
                        ID: 1234
                        </Typography>
                    </Box>
                    <Button
                        size="sm"
                        startDecorator={<CreateRoundedIcon />}
                        onClick={() => setOpen(true)}
                        sx={{
                            ml: 'auto',
                            display: {
                                xs: 'flex',
                                sm: 'none',
                            },
                        }}
                    >
                        Article List
                    </Button>
                    {/* <FocusTrap open={open} disableAutoFocus disableEnforceFocus>
                        <WriteEmail open={open} onClose={() => setOpen(false)} />
                    </FocusTrap> */}
                </Box>
                <Box
                    sx={{
                        p: 0,
                        display: {
                            xs: 'none',
                            sm: 'flex',
                        },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <ArticleList activeIndex={activeIndex} indexChange={handleIndexChange} />
                </Box>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ArticleList activeIndex={activeIndex} indexChange={handleIndexChange} />
                </Drawer>
            </ArticlesLayout.SidePane>
            <ArticlesLayout.Content>
                <ArticleContent activeIndex={activeIndex} />
            </ArticlesLayout.Content>
        </ArticlesLayout.Root>
    );
}
