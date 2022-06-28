import Layout from "../components/Layout";

import { Grid, CardActionArea, CardMedia, Typography } from "@mui/material";
import NextLink from "next/link";
import data from "../utils/data";
import useStyles from "../utils/styles";

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        <h1>Category</h1>
        <Grid container spacing={3}>
          {data.categories.map((category) => (
            <Grid item md={4} key={category.name}>
              <NextLink href={`/product/${category.name}`} passHref>
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
    </Layout>
  );
}
