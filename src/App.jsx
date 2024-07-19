import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import {
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import { useDispatch } from "react-redux";
import QuoteComponents from "./Components/QuoteComponents";

const App = () => {
  const [mode, setmode] = useState(false);
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      primary: {
        main: mode ? "#6C0345" : "#003C43",
      },
      secondary: {
        main: mode ? "#DC6B19" : "#A34343",
      },
      error: {
        main: mode ? "#FA7070" : "#86469C",
      },
      success: {
        main: mode ? "#FA7070" : "#2C7865",
      },
      warning: {
        main: mode ? "#E9C874" : "#E72929",
      },
    },
  });

  const changeTheme = () => {
    mode ? setmode(false) : setmode(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar changeTheme={changeTheme} />

      <Container sx={{ margin: "80px 80px" }}>
        <QuoteComponents />
        <Typography variant="h3" align="center">
          Redux-Todo
        </Typography>

        <Form />
        <ListGroup />
      </Container>
    </ThemeProvider>
  );
};

export default App;
