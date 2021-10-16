import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Button,
  Paper,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Sidebar from "../../components/screens/Sidebar/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const useStyles = makeStyles((theme) => ({
    paper_topic_card: {
      height: theme.spacing(20),
      backgroundColor: "#3AAFA9",
      padding: "10px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    paper_text: {
      color: "#FEFFFF",
      fontWeight: "bold",
      fontSize: "25px",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/article/getAll`);
        setData(res.data.reverse().slice(-4));
      } catch (err) {
        console.log(err);
      }
    };
    getArticles();
  }, []);

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          {/* Right hand side grid */}
          <Box className="right_grid_publish">
            <Grid container spacing={0} className="text_container">
              <Grid item xs={8} lg={8}>
                <center>
                  <input
                    type="text"
                    placeholder="SEARCH FOR ARTICLES"
                    className="text_field"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </center>
              </Grid>
              <Grid item xs={2} lg={4} classname="button_container">
                <center>
                  <Button
                    variant="outlined"
                    className="text_button"
                    style={{
                      backgroundColor: "#17252a",
                      color: "#FEFFFF",
                      width: "60%",
                    }}
                  >
                    SEARCH
                  </Button>
                </center>
              </Grid>
            </Grid>
            <div className="card_div">
              <Grid item lg={12}>
                <div className="card_chip">SEARCH BY LANGUAGE</div>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Link to={`/search/English`} className="Link">
                    <Paper
                      elevation={4}
                      className={`card_bg_image_yellow ${classes.paper_topic_card}`}
                    >
                      <Typography variant="h4" className={classes.paper_text}>
                        ENGLISH
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Link to={`/search/Hindi`} className="Link">
                    <Paper
                      elevation={4}
                      className={`card_bg_image ${classes.paper_topic_card}`}
                    >
                      <Typography variant="h4" className={classes.paper_text}>
                        हिंदी
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Link to={`/search/French`} className="Link">
                    <Paper
                      elevation={4}
                      className={`card_bg_image_green ${classes.paper_topic_card}`}
                    >
                      <Typography variant="h4" className={classes.paper_text}>
                        Français
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Link to={`/search/Tamil`} className="Link">
                    <Paper
                      elevation={4}
                      className={`card_bg_image_pink ${classes.paper_topic_card}`}
                    >
                      <Typography variant="h4" className={classes.paper_text}>
                        தமிழ்
                      </Typography>
                    </Paper>
                  </Link>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image_yellow ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      Español
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image_yellow ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      ಕನ್ನಡ
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image_yellow ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      عربي
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={3} lg={3} spacing={0}>
                  <Paper
                    elevation={4}
                    className={`card_bg_image_yellow ${classes.paper_topic_card}`}
                  >
                    <Typography variant="h4" className={classes.paper_text}>
                      Deutsch
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
            <div className="card_chip">RECENT ARTICLES</div>
            <Grid container spacing={2}>
              {data
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((article) => (
                  <Grid item xs={3} lg={3}>
                    <Link to={`/article/${article._id}`} className="Link">
                      <div className="article_card">
                        <center>
                          <div className="v_text">{article.title}</div>
                        </center>
                      </div>
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
