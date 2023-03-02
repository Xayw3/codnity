import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { CharacterResult } from '../../models/CharacterModel';

const CharactersPage = () => {
  const [characters, setCharacters] = useState<CharacterResult[]>([]);
  const [loader, setLoader] = useState(false);

  const getCharacters = async () => {
    setLoader(true);

    try {
      const allCharacters = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(allCharacters.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <section>
      <Container>
        {
          loader ? <CircularProgress className="loader" />
            : (
              <>
                <Typography variant="h2" textAlign="center" marginBottom="50px">Rick and Morty Characters</Typography>
                <Grid container spacing={4}>
                  {
                    characters.map(({
                      name, id, image, gender, species, origin,
                    }) => (
                      <Grid item key={id} xs={12} sm={6} md={4}>
                        <Card className="card">
                          <CardMedia className="image" image={image} title={name} />
                          <CardContent>
                            <Typography variant="h4">
                              Character Info
                            </Typography>
                            <Typography>
                              {`Name: ${name}`}
                            </Typography>
                            <Typography>
                              {`Gender: ${gender}`}
                            </Typography>
                            <Typography>
                              {`Specie: ${species}`}
                            </Typography>
                            <Typography>
                              {`Origin: ${origin.name}`}
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

export default CharactersPage;
