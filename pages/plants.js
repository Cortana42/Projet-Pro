import Layout from "../components/Layout";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";
import NextLink from "next/link";
import data from "../utils/data";

export default function Plants() {
  return (
    <Layout>
      <div>
        <h1>Plants</h1>
        <Grid container spacing={3}>
          {data.plants.map((plant) => (
            <Grid item md={3} key={plant.name}>
              <Card>
                <NextLink href={`/product/plants/${plant.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={plant.image}
                      title={plant.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{plant.name}</Typography>
                      <br></br>
                      <Rating value={plant.rating} readonly></Rating>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>{plant.price}$</Typography>
                  <Button size="small" color="warning">
                    Ajouter au panier
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
