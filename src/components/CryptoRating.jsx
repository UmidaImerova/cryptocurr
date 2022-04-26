import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { topCryptoAPI } from "../data/topCoinSlice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const CryptoRating = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(topCryptoAPI());
  }, []);
  let counter = 1;

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Short name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.topCrypto.map((currency) => (
              <TableRow key={currency.currency_ID}>
                  <TableCell>{counter++}</TableCell>
                  <TableCell>{currency.fullname}</TableCell>
                  <TableCell>{currency.currency_short_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CryptoRating;

