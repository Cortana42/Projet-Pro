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

export default function BathroomScreen() {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const bathroom = data.bathrooms.find((a) => a.slug === slug);
  if (!bathroom) {
    return <div>bathroom Not Found</div>;
  }
  return (
    <Layout title={bathroom.name} description={bathroom.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Revenir à la liste de produit</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={bathroom.image}
            alt={bathroom.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h4">
                {bathroom.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Catégorie: {bathroom.category}</Typography>
            </ListItem>
            <ListItem>
              <Rating value={bathroom.rating} readOnly></Rating>
              <Typography className={classes.smallText}>
                ({bathroom.reviews} évaluations)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Stock: {bathroom.stock}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <h4>Description:</h4> {bathroom.description}
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
                    <Typography>{bathroom.price}$</Typography>
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
                      {bathroom.stock > 0 ? "En stock" : "Stock épuisé"}
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
