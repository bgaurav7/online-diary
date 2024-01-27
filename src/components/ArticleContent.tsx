import * as React from 'react';

import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import Sheet from '@mui/joy/Sheet';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';

import { JoyuiMarkdown } from 'joyui-markdown';
import { Highlight, themes } from 'prism-react-renderer';

import { articlesContent } from '../services/ApiService';

export default function ArticleContent({title = "Loading...", author = "Loading...", contentLink = ""}) {
  const [articleContent, setArticleContent] = React.useState("# Loading...");

  async function refreshArticleContent() {
    try {
      const result = await articlesContent(contentLink);
      console.info('Article Content:', result);
      setArticleContent(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setArticleContent("# Error Loading Article");
    }
  }

  React.useEffect(() => {
    console.info('useEffect:');
    refreshArticleContent()
  }, [contentLink]);

  return (
    <Sheet
      variant="outlined"
      sx={{
        minHeight: 500,
        borderRadius: 'sm',
        p: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
      >
        <Typography
          level="h2"
          textColor="text.primary"
        >
          {title}
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Typography
              component="span"
              level="body-sm"
              sx={{ mr: 1, display: 'inline-block' }}
            >
              By
            </Typography>
            <Tooltip size="sm" title="Copy article" variant="outlined">
              <Chip size="sm" variant="soft" color="primary" onClick={() => {}}>
                {author}
              </Chip>
            </Tooltip>
          </div>
        </Box>
      </Box>
      <Divider sx={{ my: 2}} />
      <JoyuiMarkdown
        Highlight={Highlight}
        themes={themes}>
          {articleContent}
      </JoyuiMarkdown>
    </Sheet>
  );
}