import {
  Container, CircularProgress, Typography, Grid, Card, CardContent,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { LocationsResult } from '../../models/LocationModel';

const LocationsPage = () => {
  const [locations, setLocations] = useState<LocationsResult[]>([]);
  const [loader, setLoader] = useState(false);

  const getLocations = async () => {
    setLoader(true);

    try {
      const allLocations = await axios.get('https://rickandmortyapi.com/api/location');
      setLocations(allLocations.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <section>
      <Container>
        {
          loader ? <CircularProgress className="loader" />
            : (
              <>
                <Typography variant="h2" textAlign="center" marginBottom="50px">Rick and Morty Locations</Typography>
                <Grid container spacing={4}>
                  {
                    locations.map(({
                      name, id, type, dimension,
                    }) => (
                      <Grid item key={id} xs={12} sm={6} md={4}>
                        <Card className="card">
                          <CardContent>
                            <Typography>
                              {`Location: ${name}`}
                            </Typography>
                            <Typography>
                              {`Location type: ${type}`}
                            </Typography>
                            <Typography>
                              {`Dimension: ${dimension}`}
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

export default LocationsPage;
