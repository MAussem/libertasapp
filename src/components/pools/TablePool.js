import * as React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import {
  useContractStaking30Read,
  useContractStaking60Read,
  useContractStaking90Read,
  useContractStaking180Read,
  useContractStaking365Read,
} from "../../hooks/libertas";
import { useMemo } from "react";
import { ethers } from "ethers";

const buttonSty = makeStyles((theme) => ({
  buttonS: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      fontSize: [14, "!important"],
    },
  },
}));

export default function BasicTable() {
  const navigate = useNavigate();

  const handleRowClick = (days) => {
    navigate(`/staking${days}`);
  };

  const classe = buttonSty();
  const buttonStyles = {
    marginTop: "10px",
    width: "100%",
    fontWeight: 800,
    color: "black",
    borderRadius: "10px",
    background: "linear-gradient(to right, #fa8128, #C8E9E9);",
    "&:hover": {
      background: "linear-gradient(to right, #C8E9E9, #fa8128);",
      transition: ".4s",
      boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.26)",
      borderRadius: "15px",
    },
  };

  const { data: totalStaked } = useContractStaking30Read("totalStaked");
  const { data: totalStaked60 } = useContractStaking60Read("totalStaked");
  const { data: totalStaked90 } = useContractStaking90Read("totalStaked");
  const { data: totalStaked180 } = useContractStaking180Read("totalStaked");
  const { data: totalStaked365 } = useContractStaking365Read("totalStaked");

  const sTotalStaked = useMemo(
    () =>
      totalStaked
        ? ethers.utils.formatEther(totalStaked.sub(totalStaked.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked]
  );

  const sTotalStaked60 = useMemo(
    () =>
      totalStaked60
        ? ethers.utils.formatEther(totalStaked60.sub(totalStaked60.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked60]
  );

  const sTotalStaked90 = useMemo(
    () =>
      totalStaked90
        ? ethers.utils.formatEther(totalStaked90.sub(totalStaked90.mod(1e14))) +
          " XLB"
        : "n/a XLB",
    [totalStaked90]
  );

  const sTotalStaked180 = useMemo(
    () =>
      totalStaked180
        ? ethers.utils.formatEther(
            totalStaked180.sub(totalStaked180.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [totalStaked180]
  );

  const sTotalStaked365 = useMemo(
    () =>
      totalStaked365
        ? ethers.utils.formatEther(
            totalStaked365.sub(totalStaked365.mod(1e14))
          ) + " XLB"
        : "n/a XLB",
    [totalStaked365]
  );

  function createData(days, token, tvl, ethRewards, xlbRewards) {
    return { days, token, tvl, ethRewards, xlbRewards };
  }

  const rows = [
    createData(30, "XLB", sTotalStaked, "6.26%", "30%"),
    createData(60, "XLB", sTotalStaked60, "6.88%", "30%"),
    createData(90, "XLB", sTotalStaked90, "7.93%", "30%"),
    createData(180, "XLB", sTotalStaked180, "8.28%", "30%"),
    createData(365, "XLB", sTotalStaked365, "10%", "30%"),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "rgba(0, 21, 66, 0.95)",
        cursor: "pointer",
      }}
    >
      <Table
        sx={{ minWidth: 650, fontSize: "1.2rem" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white", fontSize: "1.2rem" }}>
              {" "}
              Days
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "white", fontSize: "1.2rem" }}
            >
              Token
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "white", fontSize: "1.2rem" }}
            >
              Total Value Locked
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "white", fontSize: "1.2rem" }}
            >
              Annualized ETH Rewards
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "white", fontSize: "1.2rem" }}
            >
              Annualized XLB Rewards
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: "white", fontSize: "1.2rem" }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              hover
              key={row.days}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              // onClick={() => handleRowClick(row.days)}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                {row.days}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                {row.token}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 10,
                    marginLeft: 40,
                  }}
                >
                  {row.tvl}
                  <Box>$188,888 USD </Box>
                </Box>
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                {row.ethRewards}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                {row.xlbRewards}
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: "white", fontSize: "1.2rem" }}
              >
                <Button
                  className={classe.buttonS}
                  variant="contained"
                  sx={buttonStyles}
                  type="button"
                  style={{
                    marginBottom: 10,
                  }}
                  onClick={() => handleRowClick(row.days)}
                >
                  {row.days} Day Pool
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
