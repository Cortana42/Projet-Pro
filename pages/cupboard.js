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

export default function Bathrooms() {
  return (
    <Layout>
      <div>
        <h1>bathroom</h1>
        <Grid container spacing={3}>
          {data.bathrooms.map((bathroom) => (
            <Grid item md={3} key={bathroom.name}>
              <Card>
                <NextLink href={`/product/bathrooms/${bathroom.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={bathroom.image}
                      title={bathroom.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{bathroom.name}</Typography>
                      <br></br>
                      <Rating value={bathroom.rating} readonly></Rating>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>{bathroom.price}$</Typography>
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
