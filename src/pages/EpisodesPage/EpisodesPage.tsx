import {
  Card, CardContent, CircularProgress, Container, Grid, Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { EpisodeResult } from '../../models/EpisodeModel';

const EpisodePage = () => {
  const [episodes, setEpisodes] = useState<EpisodeResult[]>([]);
  const [loader, setLoader] = useState(false);

  const getEpisodes = async () => {
    setLoader(true);

    try {
      const allEpisodes = await axios.get('https://rickandmortyapi.com/api/episode');
      setEpisodes(allEpisodes.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <section>
      <Container>
        {
          loader ? <CircularProgress className="loader" />
            : (
              <>
                <Typography variant="h2" textAlign="center" marginBottom="50px">Rick and Morty Episodes</Typography>
                <Grid container spacing={4}>
                  {
                    episodes.map(({ name, id, episode }) => (
                      <Grid item key={id} xs={12} sm={6} md={4}>
                        <Card className="card">
                          <CardContent>
                            <Typography>
                              {name}
                            </Typography>
                            <Typography>
                              {episode}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  }
                </Grid>
              </>
            )
        }
      </Container>
    </section>
  );
};

export default EpisodePage;
