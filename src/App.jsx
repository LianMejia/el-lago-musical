import "./App.css";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Chip,
  Box,
  Paper,
  Container,
  Grid
} from "@mui/material";
import BugReportIcon from "@mui/icons-material/BugReport";

const songs = [
  ["brr", "fiu", "cric-cric", "brrah"],
  ["pep", "birip", "trri-trri", "croac"],
  ["bri-bri", "plop", "cric-cric", "brrah"],
];

export const App = () => {
  const [actualSong, setActualSong] = useState("");
  const [response, setResponse] = useState([]);

  const searchSong = () => {
    for (const song of songs) {
      const index = song.indexOf(actualSong);
      if (index !== -1) {
        if (actualSong === "croac" || actualSong === "brrah") {
          setResponse([]);
        } else {
          const sequenceSounds = song.slice(index + 1);
          setResponse(sequenceSounds);
        }
        return;
      }
    }
    setResponse([]);
  };

  useEffect(() => {
    searchSong();
  }, [actualSong]);

  const handleChange = (event) => {
    setActualSong(event.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
        <Container maxWidth="sm">
          <Paper elevation={2}>
            <Box py={2}>
              <div className="App">
                <Typography variant="h4" gutterBottom>
                  El lago musical
                </Typography>
                <Box py={2}>
                  <TextField
                    value={actualSong}
                    onChange={handleChange}
                    label="Sound"
                    variant="outlined"
                    inputProps={{ maxLength: 10 }}
                  />
                </Box>
                {response.length > 0 ? (
                  response.map((sound, index) => (
                    <Chip
                      icon={<BugReportIcon />}
                      variant="outlined"
                      key={index}
                      label={sound}
                      style={{ margin: "4px" }}
                    />
                  ))
                ) : actualSong === "croac" || actualSong === "brrah" ? (
                  <Typography variant="subtitle1" gutterBottom>
                    None match with {actualSong}
                  </Typography>
                ) : (
                  <></>
                )}
              </div>
            </Box>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};
