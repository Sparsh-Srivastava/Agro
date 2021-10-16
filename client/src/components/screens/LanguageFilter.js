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
import { Link } from "react-router-dom";
import axios from "axios";

const LanguageFilter = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const url = window.location.pathname;
  const lastSegment = url.split("/").pop();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/article/languageFilter/${lastSegment}`
        );
        setData(res.data.Articles);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
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
            <div className="card_chip">{lastSegment} ARTICLES</div>
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

export default LanguageFilter;
