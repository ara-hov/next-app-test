import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from '@/styles/breadcrumb.module.css'

const Breadcrumb = () => {
    const location = useRouter();
    const pathname = location.pathname;
    const segments = pathname.split('/');
    const query = location.query
    let url = '';
    const list = segments.map((el, i) => {
        if (i === 0) {
            return {name: 'home', url: '/'}
        } else {
            if (el) {
                return {
                    name: el.replace('-', ' ').replace('[id]', String(query.id)),
                    url: el
                }
            }
        }
    }).filter(item => item)

    return (
        <div className="container">
            <div className={styles.breadcrumb}>
                <div className={styles.breadcrumb_wrapper}>
                    {list.map((el, idx) => {
                        if ((idx !== list.length - 1) && (el.name !== 'edit')) {
                            url += (url.length > 1) ? '/' + el.url : el.url;
                            return <Link  href={url} key={"breadcrumb-" + idx}>
                                        <a  className={styles.breadcrumb_item} href={url}>{el.name}</a>
                                   </Link>
                        } else {
                            return <span className={styles.breadcrumb_item} key={"breadcrumb-" + idx}>{el.name}</span>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
