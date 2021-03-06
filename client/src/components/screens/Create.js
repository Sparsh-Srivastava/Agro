import React, { useState } from "react";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import Sidebar from "../../components/screens/Sidebar/Sidebar";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./Create.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  let history = useHistory();

  async function predict(query) {
    var myParams = {
      data: query,
    };

    if (query != "") {
      await axios
        .post("http://localhost:7000/predict", myParams)
        .then(function (response) {
          console.log(response);
          setLanguage(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("The search query cannot be empty");
    }
  }

  const [editorState, setData] = useState(EditorState.createEmpty());
  const [htmlData, setHtmlData] = useState("");

  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");

  const createArticle = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/article/create",
        {
          title: title,
          body: htmlData,
          id: localStorage.getItem("userId"),
          language: language,
        },
        config
      );
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={9} lg={10}>
          <Box className="right_grid_publish">
            <center>
              <div className="card_chip title_card">WRITE ARTICLE</div>
            </center>
            <div className="card_chip">ARTICLE TITLE</div>
            <br />
            <div>
              <TextField
                placeholder="ARTICLE TITLE"
                multiline
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />
            <Editor
              onEditorStateChange={(e) => {
                setData(e);
                setHtmlData(
                  draftToHtml(convertToRaw(editorState.getCurrentContent()))
                );
              }}
            />
            <br />
            <center>
              <Button
                variant="outlined"
                className="text_button"
                style={{
                  backgroundColor: "#3eaf3a",
                  color: "#FEFFFF",
                  width: "20%",
                }}
                onClick={() => {
                  if (title) {
                    predict(`${title}`);
                  } else {
                    console.log("Title not available");
                  }
                }}
              >
                DETECT LANGUAGE
              </Button>
              <br />
              <br />
              <Button
                variant="outlined"
                className="text_button"
                style={{
                  backgroundColor: "#3eaf3a",
                  color: "#FEFFFF",
                  width: "50%",
                }}
                onClick={createArticle}
              >
                PUBLISH ARTICLE
              </Button>
            </center>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Create;
