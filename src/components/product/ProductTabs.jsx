import React from "react";
import styles from "./ProductTabs.module.scss";
import classNames from "classnames";
import User from "../user/User";
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns";
import { TabContext } from "@mui/lab";
import { Tab } from "@mui/material";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import { TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";

export default function ProductTabs({ text, bids }) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const formatDate = (crrDate) => {
        const data = parseISO(crrDate)
        return formatDistance(data, new Date())

    };

    const currentBids =
        <TableContainer>
            <Table>
                <TableBody>
                    {
                        bids.map((crrBid, index) => {
                            return <TableRow key={`${crrBid.user.name} bid`} className={classNames(styles[`table-row-${index}`])}>
                                <TableCell component='th' scope='row'>
                                    <User name={crrBid.user.name} avatar={crrBid.user.avatar} verified={crrBid.user.verified} />
                                </TableCell>

                                <TableCell>
                                    <p>{`${crrBid.amount} ETH`}</p>
                                </TableCell>

                                <TableCell>
                                    {formatDate(crrBid.date)}
                                </TableCell>

                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>

    return (
        <TabContext className={classNames(styles["product-tabs"])} value={value}>
            <TabList onChange={handleChange}>
                <Tab label='DETAILS' value="1" />
                <Tab label='BIDS' value="2" />
            </TabList>
            <TabPanel value="1">{text}</TabPanel>
            <TabPanel value="2">{currentBids}</TabPanel>


        </TabContext>
    )
}