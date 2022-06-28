import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import data from "../../../utils/data";
import Layout from "../../../components/Layout";
import useStyles from "../../../utils/styles";

export default function ProductScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const plant = data.plants.find((a) => a.slug === slug);
  if (!plant) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={plant.name} description={plant.description}>
      <div className={classes.section}>
        <NextLink href="/plants" passHref>
          <Link>Revenir à la liste de produit</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={plant.image}
            alt={plant.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h4">{plant.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Catégorie: {plant.category}</Typography>
            </ListItem>
            <ListItem>
              <Rating value={plant.rating} readonly></Rating>
              <Typography className={classes.smallText}>
                ({plant.reviews} évaluations)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Stock: {plant.stock}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <h4>Description:</h4> {plant.description}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid itemxs={6}>
                    <Typography>{plant.price}$</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid itemxs={6}>
                    <Typography>
                      {plant.stock > 0 ? "En stock" : "Stock épuisé"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="warning">
                  Ajouter au panier
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
