import React from "react";
import styles from "./ActivityList.module.scss";
import classNames from "classnames";
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({ items }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <div className={classNames(styles["activity-list"])}>
                <Stack
                    direction={"column"}
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    {items.map((el, i) => {
                        return (
                            <ActivityListItem
                                key={i}
                                user={el?.user}
                                created_at={el?.created_at}
                                nft={el?.nft}
                                type={el?.type}
                            />
                        )
                    })}
                </Stack>
            </div>
        </div>
    )
};