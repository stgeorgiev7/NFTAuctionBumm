import React from "react";
import * as styles from "./ProductTabs.module.scss";
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
                        bids.map((crrBid, i) => {
                            return (
                                <TableRow className={classNames(styles[`table-row-${i}`])} key={`${crrBid.user.name} bid`}>
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

                            )

                        })
                    }
                    </TableBody>
            </Table>
        </TableContainer>

    return (
        <div className={classNames(styles['tab-bids'])} >
            <TabContext value={value}>
                <TabList onChange={handleChange} >
                    <Tab label='DETAILS' value="1" className={classNames(styles["tab-details"])} />
                    <Tab label='BIDS' value="2" className={classNames(styles["tab-bids"])} />
                </TabList>
                <TabPanel value="1">{text}</TabPanel>
                <TabPanel value="2">{currentBids}</TabPanel>

            </TabContext>
        </div>

    )
}