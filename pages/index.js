import Layout from "../components/Layout";
import NextJsCarousel from "../components/Carousel";
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
import useStyles from "../utils/styles";

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <NextJsCarousel />
      <div>
        <NextLink href="/category" passHref>
          <a className={classes.title}>
            <h1>Category</h1>
          </a>
        </NextLink>
        <Grid container spacing={3}>
          {data.categories.map((category) => (
            <Grid item md={3} key={category.name}>
              <NextLink href={"/cupboard"} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={category.image}
                    title={category.name}
                  ></CardMedia>
                  <Typography className={classes.txc}>
                    {category.name}
                  </Typography>
                </CardActionArea>
              </NextLink>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <NextLink href="/products" passHref>
          <a className={classes.title}>
            <h1>Products</h1>
          </a>
        </NextLink>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={3} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                      <br></br>
                      <Rating value={product.rating} readonly></Rating>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>{product.price}$</Typography>
                  <Button size="small" color="warning">
                    Ajouter au panier
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div>
        <NextLink href="/plants" passHref>
          <a className={classes.title}>
            <h1>Plants</h1>
          </a>
        </NextLink>
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
