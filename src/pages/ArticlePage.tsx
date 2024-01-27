import * as React from 'react';
import { useParams } from "react-router-dom";

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import Typography from '@mui/joy/Typography';

import ListIcon from '@mui/icons-material/List';

import ArticleContent from '../components/ArticleContent';
import ArticleList from '../components/ArticleList';
import ArticlesLayout from '../layout/ArticleLayout';
import { ArticleInfo } from "../models/ArticleInfo";
import { articlesInfoList } from "../services/ApiService";

export default function ArticlesPage() {
    const { articleId } = useParams();

    const [open, setOpen] = React.useState(false);

    const [articles, setArticles] = React.useState<ArticleInfo[]>([]);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [articleData, setArticleData] = React.useState<ArticleInfo>();

    const handleIndexChange = (index: number, item: ArticleInfo) => {
        setActiveIndex(index)
        setArticleData(item)
        setOpen(false)

        console.info('Article index:', index, articleData);
    };

    async function refreshArticlesList() {
        try {
            const result = await articlesInfoList();
            console.info('Article data:', result);
            setArticles(result);

            const index = result.findIndex((article) => article.id === articleId);
            if(index >= 0)
                handleIndexChange(index, result[index])
            else
                handleIndexChange(0, result[0])
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    React.useEffect(() => {
        refreshArticlesList()
    }, []);

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
                    <ArticleList activeIndex={activeIndex} indexChange={handleIndexChange} articleInfoList={articles} />
                </Box>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ArticleList activeIndex={activeIndex} indexChange={handleIndexChange} articleInfoList={articles} />
                </Drawer>
            </ArticlesLayout.SidePane>
            <ArticlesLayout.Content>
                <ArticleContent 
                    contentLink={articleData?.contentLink}
                    title={articleData?.title}
                    author={articleData?.author} />
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
                        {articleData?.title}
                        </Typography>
                        <Typography level="title-sm" textColor="text.tertiary">
                        {articleData?.date}
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
