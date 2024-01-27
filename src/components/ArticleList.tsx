import * as React from 'react';

import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';

import { ArticleInfo } from "../models/ArticleInfo";

export default function ArticleList({activeIndex = 0, articleInfoList = [{} as ArticleInfo], indexChange = (index: number, item: ArticleInfo) => {}}) {
  return (
    <List
      sx={{
        [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
          borderLeft: '2px solid',
          borderLeftColor: 'var(--joy-palette-primary-outlinedBorder)',
        },
      }}
    >
      {articleInfoList.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemButton
              component="a"
              href={item.id}
              {...(index === activeIndex && {
                selected: true,
                color: 'neutral',
              })}
              sx={{ p: 2 }}
            >
              {/* <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                <Avatar alt="" srcSet={item.avatar2x} src={item.avatar} />
              </ListItemDecorator> */}
              <Box sx={{ pl: 0, width: '100%' }}>
                <div>
                  <Typography level="title-sm" sx={{ mb: 0.5 }}>
                    {item.title}
                  </Typography>
                  <Typography level="body-sm">{item.description}</Typography>
                </div>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography level="body-xs">{item.author}</Typography>
                    <Box
                      sx={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '99px',
                        // bgcolor: item.color,
                      }}
                    />
                  </Box>
                  <Typography level="body-xs" textColor="text.tertiary">
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </ListItemButton>
          </ListItem>
          <ListDivider sx={{ m: 0 }} />
        </React.Fragment>
      ))}
    </List>
  );
}