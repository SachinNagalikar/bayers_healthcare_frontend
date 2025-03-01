import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DataList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ maxWidth: "800px"}}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Patient List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Contact</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell align="center"><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index} hover>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.contact}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setSelectedItem(item)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={!!selectedItem} onClose={() => setSelectedItem(null)}>
        <DialogTitle>Item Details</DialogTitle>
        <DialogContent>
          {selectedItem && (
            <DialogContentText>
              <p><strong>Name:</strong> {selectedItem.name}</p>
              <p><strong>Contact:</strong> {selectedItem.contact}</p>
              <p><strong>Email:</strong> {selectedItem.email}</p>
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedItem(null)} color="secondary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const SamplePage = () => {
  const sampleData = [
    { name: "Sachin", contact: "7795060424", email: "sachin.nagalikar@gmail.com" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "10vh", background: "#f5f5f5" }}>
      <DataList items={sampleData} />
    </div>
  );
};

export default SamplePage;
