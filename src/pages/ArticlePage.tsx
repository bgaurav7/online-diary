import * as React from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';

import ListIcon from '@mui/icons-material/List';

import ArticleContent from '../components/ArticleContent';
import ArticleList from '../components/ArticleList';
import ArticlesLayout from '../layout/ArticleLayout';

export default function ArticlesPage() {
    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [articleData, setArticleData] = React.useState({title: '', description: '', date: ''});

    const handleIndexChange = (index: number, item: any) => {
        setActiveIndex(index)
        setArticleData(item)
        setOpen(false)
    };

    return (
        <ArticlesLayout.Root>
            <ArticlesLayout.SidePane>
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
            <ArticlesLayout.BottomBar>
                <Box
                    sx={{
                        p: 2,
                        display: {
                            xs: 'flex',
                            sm: 'none',
                        },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        overflow: 'auto'
                    }}
                >
                    <Box sx={{ alignItems: 'center', gap: 1 }}>
                        <Typography level="title-lg" textColor="text.secondary">
                        {articleData.title}
                        </Typography>
                        <Typography level="title-sm" textColor="text.tertiary">
                        {articleData.date}
                        </Typography>
                    </Box>
                    <Button
                        size="sm"
                        onClick={() => setOpen(true)}
                        sx={{
                            ml: 'auto',
                        }}
                    >
                        <ListIcon />
                    </Button>
                    {/* <FocusTrap open={open} disableAutoFocus disableEnforceFocus>
                        <WriteEmail open={open} onClose={() => setOpen(false)} />
                    </FocusTrap> */}
                </Box>
            </ArticlesLayout.BottomBar>
        </ArticlesLayout.Root>
    );
}
