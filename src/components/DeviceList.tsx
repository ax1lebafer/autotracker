import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

interface Device {
  id: number;
  name: string;
  uniqueId: string;
  status: string;
  lastUpdate: string;
}

const DeviceList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);

  useEffect(() => {
    axios
      .get("/api/devices")
      .then((res) => {
        setDevices(res.data);
        setFilteredDevices(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (id: number) => {
    const filtered = devices.filter((device) => device.id === id);
    setFilteredDevices(filtered);
  };

  const handleReset = () => {
    setFilteredDevices(devices);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} onReset={handleReset} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Unique ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredDevices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.uniqueId}</TableCell>
                <TableCell>{device.status}</TableCell>
                <TableCell>
                  {new Date(device.lastUpdate).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DeviceList;
