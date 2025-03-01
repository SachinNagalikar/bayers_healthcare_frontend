import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, Box, Card, CardContent, Typography, CssBaseline } from "@mui/material";
import Wellness from "../wellness/Wellness";
import ListPatient from "../provider/ListPatient";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1, borderBottom: "1px solid #e0e0e0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Home", "Health Topic", "Services", "Contact"].map((item) => (
            <Typography key={item} variant="h6" sx={{ cursor: "pointer", color: "gray", '&:hover': { color: "#3f51b5" }}}>
              {item}
            </Typography>
          ))}
        </Box>
        <Box>
          <Button variant="contained" color="secondary" onClick={() => navigate("/login")} sx={{ mr: 2 }}>
            Log Out
          </Button>
          <Button variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Sidebar = ({ setShowListPatient, showListPatient, setShowWellness, showWellness }) => {
  const navigate = useNavigate();

  const handleSidebarClick = (item) => {
    if (item === "Wellness Goals") {
      setShowWellness(true);
      setShowListPatient(false);
    } else if (item === "Dashboard") {
      setShowWellness(false);
      setShowListPatient(false);
    } else if (item === "List Patient") {
      setShowWellness(false);
      setShowListPatient(true);
    } else if (item === "Logout") {
      navigate("/login");
    }
  };

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", backgroundColor: "#212121", color: "white" } }}>
      <List>
        {["Dashboard", "Wellness Goals", "List Patient", "Logout"].map((item) => (
          <ListItem button key={item} onClick={() => handleSidebarClick(item)}>
            <ListItemText primary={item} sx={{ color: "white" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const InfoCard = ({ title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, transition: "transform 0.3s", '&:hover': { transform: "scale(1.05)" } }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const [showWellness, setShowWellness] = useState(false);
  const [showListPatient, setShowListPatient] = useState(false);

  const cardData = [
    { title: "COVID-19 Updates", description: "Stay informed about the latest COVID-19 guidelines and vaccination information" },
    { title: "Seasonal Flu Prevention", description: "Learn about steps you can take to prevent the seasonal flu and when to get vaccinated" },
    { title: "Mental Health Awareness", description: "Explore resources and support options for maintaining good mental health" },
    { title: "HMPV", description: "Human metapneumovirus (HMPV) is a common respiratory virus that causes an upper respiratory infection (like a cold)." },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <CssBaseline />
      <Sidebar showListPatient={showListPatient} setShowListPatient={setShowListPatient} setShowWellness={setShowWellness} showWellness={showWellness} />
      <Box sx={{ flexGrow: 1, ml: 30, p: 3 }}>
        <Navbar />
        <Box sx={{ mt: 4 }}>
          {showWellness ? (
            <Wellness />
          ) : showListPatient ? (
            <ListPatient />
          ) : (
            <Box sx={{ display: "grid", gap: 3, gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
              {cardData.map((card, index) => (
                <InfoCard key={index} title={card.title} description={card.description} />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;