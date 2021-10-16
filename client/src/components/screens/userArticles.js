import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import Sidebar from "../../components/screens/Sidebar/Sidebar";
import { Link } from "react-router-dom";

const UserArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/article/getUserArticles/${localStorage.getItem(
            "userId"
          )}`,
          config
        );
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          <Box className="right_grid_publish">
            <center>
              <div className="card_chip title_card">MY ARTICLES</div>
            </center>
            <br />
            <Grid container spacing={2}>
              {articles.map((article) => (
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

export default UserArticles;
