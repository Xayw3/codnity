import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar, Container, Toolbar, Link, Stack,
} from '@mui/material';
import { useState } from 'react';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menu = [
    {
      title: 'Characters',
      link: '/',
    },
    {
      title: 'Locations',
      link: '/locations',
    },
    {
      title: 'Episodes',
      link: '/episodes',
    },
  ];

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Stack direction="row" spacing={2} margin="auto">
            {
              menu.map(({ title, link }, i) => (
                <Link
                  key={title}
                  component={RouterLink}
                  to={link}
                  underline={i === activeIndex ? 'always' : 'hover'}
                  color="#fff"
                  onClick={() => setActiveIndex(i)}
                >
                  {title}
                </Link>
              ))
            }
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
