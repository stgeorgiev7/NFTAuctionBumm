import React from 'react';
import Avatar from '../avatar/Avatar';
import styles from './User.module.scss';
import classNames from 'classnames';
import Link from 'next/link';

export default function User({ name, info, avatar = '', size = 55, verified = false, id }) {

    return (
        <Link href={"/profile" + "/" + id}>
            <div className={classNames(styles.user)}>
                <Avatar url={avatar} size={size} verified={verified} />
                <ul>
                    <li>
                        <p className={classNames(styles.name)}>{name}</p>

                    </li>
                    <li>
                        <p className={classNames(styles.info)}>{info}</p>
                    </li>
                </ul>

            </div>
        </Link>

    )
};