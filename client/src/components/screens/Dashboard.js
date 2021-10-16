import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Grid } from "@material-ui/core";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/auth/getUser/${localStorage.getItem(
            "userId"
          )}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={3} lg={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={9} lg={10}>
        <div className="right_grid_publish">
          <Grid container spacing={2}>
            <Grid item xs={4} lg={4}>
              <div className="name_tag">Hello, {data.username}</div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
