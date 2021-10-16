import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Grid } from "@material-ui/core";
import axios from "axios";
import {
  PieChart,
  Pie,
  Tooltip,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [pie, setPie] = useState("");
  const [radar, setRadar] = useState("");

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

    const getPie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/stats/pie/${localStorage.getItem(
            "userId"
          )}`
        );
        setPie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getRadar = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/stats/radar/${localStorage.getItem(
            "userId"
          )}`
        );
        setRadar(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
    getPie();
    getRadar();
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
          <Grid container spacing={4}>
            <Grid item xs={4} lg={4}>
              <div className="pie">
                <PieChart width={400} height={265}>
                  <Pie
                    data={pie}
                    dataKey="Articles"
                    nameKey="Language"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#3eaf3a"
                    label
                  />
                  <Tooltip />
                </PieChart>
                <p className="pie_title" style={{ color: "#000000" }}>
                  ARTICLE LANGUAGE DISTRIBUTION
                </p>
              </div>
            </Grid>
            <Grid item xs={8} lg={8}>
              <div className="pie">
                <RadarChart
                  outerRadius={90}
                  width={730}
                  height={265}
                  data={radar}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="Language" />
                  <PolarRadiusAxis angle={30} domain={[0, 5]} />
                  <Radar
                    name="Language"
                    dataKey="Articles"
                    stroke="#3eaf3a"
                    fill="#3eaf3a"
                  />
                  <br />
                  <Tooltip />
                  <Legend />
                </RadarChart>
                <p className="pie_title" style={{ color: "#000000" }}>
                  LANGUAGE RADAR DISTRIBUTION
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
