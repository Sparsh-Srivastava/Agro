import React, { useEffect, useState } from "react";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import Sidebar from "../../components/screens/Sidebar/Sidebar";
import parse from "html-react-parser";
import marked from "marked";
import axios from "axios";

const Article = (props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/article/getOne/${props.match.params.id}`
        );
        setData(res.data.article);
      } catch (err) {
        console.log(err);
      }
    };
    getArticles();
  }, []);

  return data ? (
    <div>
      {console.log(data)}
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          <Box className="right_grid_publish">
            <h1>{data.title}</h1>
            <br />
            <div className="subject_pill">{data.language}</div>
            <br />
            {parse(data.body)}
          </Box>
        </Grid>
      </Grid>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Article;
