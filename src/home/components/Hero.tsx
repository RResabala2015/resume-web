import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ImageAvatars from './ImageAvatars';


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <ImageAvatars/>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            About&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              me
            </Typography>
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{
              fontSize: 'clamp(1rem, 2vw, 2rem)',
              alignSelf: 'left',
              width: { sm: '100%', md: '100%' } 
            }}
          >
            Hello, I'm Renato Resabala
          </Typography>
          <Typography
            textAlign="left"
            color="text.secondary"
            sx={{
              fontSize: 'clamp(1rem, 2vw, 2rem)',
              alignSelf: 'left',
              width: { sm: '100%', md: '100%' } 
          }}
          >
            I'm a Software Engineer based in Guayaquil, Ecuador with more than 8 years of experience, 
            developing solutions that connect the digital world with real life!
            I have the power to develop in frontend, backend, which allows me to bring my magic to both
            revolutionary startups and giant enterprise projects. I'm passionate about writing clean,
            maintainable code and design with users in mind, thriving in environments that love innovation
            and continuous professional growth. Let's make technology shine!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}