import {
  Box, Link, Container, Stack,
} from '@mui/material';
import {
  LinkedIn, Facebook, Instagram, Twitter,
} from '@mui/icons-material';

const Footer = () => {
  const links = [
    {
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/',
    },
    {
      icon: <Facebook />,
      link: 'https://www.facebook.com/',
    },
    {
      icon: <Instagram />,
      link: 'https://www.instagram.com/',
    },
    {
      icon: <Twitter />,
      link: 'https://twitter.com/',
    },
  ];

  return (
    <footer>
      <Box sx={{
        padding: '20px 0',
        backgroundColor: 'primary.dark',
        width: '100%',
      }}
      >
        <Container>
          <Stack spacing={3} direction="row" justifyContent="center">
            {
              links.map(({ icon, link }) => (
                <Link key={link} color="#fff" href={link} target="_blank" rel="noreferrer">{icon}</Link>
              ))
            }
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
