import * as React from 'react';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Step, { stepClasses } from '@mui/joy/Step';
import StepIndicator, { stepIndicatorClasses } from '@mui/joy/StepIndicator';
import Stepper from '@mui/joy/Stepper';
import Typography, { typographyClasses } from '@mui/joy/Typography';

function MultipleInteractionCard() {
    return (
      <Card variant="outlined">
        <CardOverflow>
        </CardOverflow>
        <CardContent>
            <Typography level="title-lg">NYC Coders</Typography>
            <Typography level="body-sm">
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
            <br />
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
            <br />
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
            <br />
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
            <br />
            We are a community of developers prepping for coding interviews,
            participate, chat with others and get better at interviewing.
            </Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography level="body-xs">2012 - 2014</Typography>
            <Divider orientation="vertical" />
            <Typography level="body-xs">Jio Tesseract</Typography>
          </CardContent>
        </CardOverflow>
      </Card>
    );
}


export default function ResumeExperience() {
  return (
    <Stepper
      orientation="vertical"
      sx={{
        '--Stepper-verticalGap': '2rem',
        '--StepIndicator-size': '4rem',
        '--Step-gap': '1rem',
        '--Step-connectorInset': '0.5rem',
        '--Step-connectorRadius': '1rem',
        '--Step-connectorThickness': '4px',
        '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
        [`& .${stepClasses.completed}`]: {
            '&::after': { bgcolor: 'success.solidBg' },
        },
        [`& .${stepClasses.active}`]: {
            [`& .${stepIndicatorClasses.root}`]: {
                border: '4px solid',
                borderColor: '#fff',
                boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
            },
        },
        [`& .${stepClasses.disabled} *`]: {
            color: 'neutral.softDisabledColor',
        },
        [`& .${typographyClasses['title-sm']}`]: {
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
      }}
    >
      <Step
        active
        indicator={<StepIndicator variant="solid" color="primary">2022</StepIndicator>}
      >
        <MultipleInteractionCard />
      </Step>
      <Step
        completed
        indicator={<StepIndicator variant="solid" color="danger">2020</StepIndicator>}
      >
        <MultipleInteractionCard />
      </Step>
      <Step
        completed
        indicator={<StepIndicator variant="solid" color="success">2018</StepIndicator>}
      >
        <MultipleInteractionCard />
      </Step>
      <Step
        completed
        indicator={<StepIndicator variant="solid" color="success">2016</StepIndicator>}
      >
        <MultipleInteractionCard />
      </Step>
    </Stepper>
  );
}