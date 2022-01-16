import React from "react";
import * as styles from "./ProductTabs.module.scss";
import classNames from "classnames";
import User from "../user/User";
import { formatDistance, parseISO } from "date-fns";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Tab,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

export default function ProductTabs({ text, bids }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatDate = (crrDate) => {
    const data = parseISO(crrDate);
    return formatDistance(data, new Date());
  };

  const currentBids = (
    <TableContainer>
      <Table>
        <TableBody>
          {bids?.map((crrBid, i) => {
            return (
              <TableRow
                className={`table-row-${i}`}
                key={`${crrBid.user.name} bid`}
                sx={{
                  border: 0,
                  padding: "0 2rpx",
                  backgroundColor:
                    i % 2 === 0
                      ? "rgb(78, 36, 242,0.05)"
                      : "rgb(78, 36, 242,0.15",
                }}
              >
                <TableCell component="th" scope="row">
                  <User
                    name={crrBid.user.name}
                    avatar={crrBid.user.avatar}
                    verified={crrBid.user.verified}
                    size={34}
                  />
                </TableCell>

                <TableCell>
                  <p>{`${crrBid.amount} ETH`}</p>
                </TableCell>

                <TableCell>{formatDate(crrBid.date)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value={value} sx={{ width: "100%" }}>
        <TabList onChange={handleChange}>
          <Tab
            label="DETAILS"
            value="1"
            className={classNames(styles["tab-details"])}
          />
          <Tab
            label="BIDS"
            value="2"
            className={classNames(styles["tab-bids"])}
          />
        </TabList>
        <TabPanel sx={{ paddingX: 0 }} value="1">
          {text}
        </TabPanel>
        <TabPanel sx={{ paddingX: 0 }} value="2">
          {currentBids}
        </TabPanel>
      </TabContext>
    </div>
  );
}
