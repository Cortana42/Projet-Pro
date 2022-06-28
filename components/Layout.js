import React from "react";
import { createTheme } from "@mui/material/styles";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  CssBaseline,
} from "@mui/material";
import useStyles from "../utils/styles";
import Image from "next/image";
import { ThemeProvider } from "@mui/styles";

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      mode: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Mobilishop` : "Mobilishop"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <div className={classes.logo}>
                  <Image src="/logo.png" width={50} height={50} alt="" />
                  <Typography className={classes.brand}>mobilishop</Typography>
                </div>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All Rights reserved. Mobili Shop</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
