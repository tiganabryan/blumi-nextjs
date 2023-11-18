import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'How do you ensure that you understand my business goals?',
    subtitle:
      'We will conduct  interviews with you and your team to gain a deep understanding of your business goals, target audience, and any specific pain points.',
  },
  {
    title:
      'How do you develop the plan that outlines the timeline for my project?',
    subtitle:
      'Once we have a clear understanding of your project, we will develop a detailed action plan that outlines the specific tasks that will be involved in completing your project. We will also provide a realistic timeline for each task, so you can be confident that your project will be completed on time and within budget.',
  },
  {
    title:
      'How do you make sure that my website is performant and fast-loading?',
    subtitle:
      "We will use a number of techniques to optimize your website for performance, including using efficient coding practices, optimizing images, and using a content delivery network (CDN). We will also monitor your website's performance and make adjustments as needed.",
  },
  // {
  //   title: 'Can I change plans later on?',
  //   subtitle:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  // },
  // {
  //   title: 'Is this a subscription service?',
  //   subtitle:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  // },
  // {
  //   title: 'Can I purchase a gift certificate?',
  //   subtitle:
  //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  // },
];

const Faq = () => {
  return (
    <Box id="faq">
      <Box marginBottom={4}>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Frequently asked questions
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography variant={'h6'} fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;
