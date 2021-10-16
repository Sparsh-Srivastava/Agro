import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Grid } from "@material-ui/core";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={3} lg={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={9} lg={10}>
        <h1>Next to the sidebar</h1>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
