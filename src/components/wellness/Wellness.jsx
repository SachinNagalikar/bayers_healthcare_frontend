import React from "react";
import { Box, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import { FaWalking, FaTint, FaRegMoon } from "react-icons/fa";

const Wellness = () => {
    const cardData = [
        { steps: 3260, sleep_time: 8, water_consumption: 5 }
    ];

    const getPercentage = (value, max) => (value / max) * 100;

    return (
        <Box minHeight="10vh" bgcolor="grey.100" p={4} display="flex" justifyContent="center">
            <Box display="grid" gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }} gap={3}>
                {cardData.map((card, index) => (
                    <React.Fragment key={index}>
                        {/* Steps Card */}
                        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                    <FaWalking color="#1E88E5" /> Steps
                                </Typography>
                                <Typography>{card.steps} / 6000</Typography>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={getPercentage(card.steps, 6000)} 
                                    sx={{ mt: 1, height: 10, borderRadius: 5 }}
                                />
                            </CardContent>
                        </Card>

                        {/* Sleep Time Card */}
                        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                    <FaRegMoon color="#8E24AA" /> Sleep Time
                                </Typography>
                                <Typography>{card.sleep_time} hrs / 8 hrs</Typography>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={getPercentage(card.sleep_time, 8)} 
                                    sx={{ mt: 1, height: 10, borderRadius: 5 }}
                                />
                            </CardContent>
                        </Card>

                        {/* Water Consumption Card */}
                        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                            <CardContent>
                                <Typography variant="h6" display="flex" alignItems="center" gap={1}>
                                    <FaTint color="#29B6F6" /> Water Consumption
                                </Typography>
                                <Typography>{card.water_consumption}L / 5L</Typography>
                                <LinearProgress 
                                    variant="determinate" 
                                    value={getPercentage(card.water_consumption, 5)} 
                                    sx={{ mt: 1, height: 10, borderRadius: 5 }}
                                />
                            </CardContent>
                        </Card>
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default Wellness;