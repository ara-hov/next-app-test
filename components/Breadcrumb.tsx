import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/breadcrumb.module.css'

const Breadcrumb = () => {
    const location = useRouter();
    const pathname = location.asPath;
    const segments = pathname.split('/');
    let url = '';
    const list = segments.map((el, i) => {
        if (i === 0) {
            return {name: 'home', url: '/home'}
        } else {
            if (el) {
                return {
                    name: el.replace('-', ' '),
                    url: el
                }
            }
        }
    }).filter(item => item)
    return (
        <div className={styles.breadcrumb}>
            <div className={styles.breadcrumb_wrapper}>
                {list.map((el, idx) => {
                    if (idx !== list.length - 1) {
                        url += el.url;
                        return <Link href={url} key={el.name}>
                            <a className={styles.breadcrumb_item} href={url}>{el.name}</a>
                        </Link>
                    } else {
                        return <span className={styles.breadcrumb_item} key={el.name}>{el.name}</span>
                    }
                })}
            </div>

        </div>
    );
};

export default Breadcrumb;
