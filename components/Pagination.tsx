import React from 'react';
import { useRouter } from 'next/router'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import styles from '../styles/pagination.module.css'
import {Pagination} from 'antd';

const range = 4;

const CustomPagination = ({items,pageSize}: any) => {
    const history = useRouter();
    const params = history.query;
    let currentPage: any = params.page;
    if (!currentPage){
        currentPage = '1';
    } else {
        currentPage = parseInt(currentPage);
    }
    const paginate = (page) => {
        history.push({
            search: `?page=${page}`
        }).then(res => {
            console.log(res);
        })
    }
    const changeCurrent = (to) => {

        paginate(to)
    };
    function itemRender(current, type,originalElement) {
        if (type === 'prev') {
            return <div className={`${styles.pagination_prev}`}>
                <LeftOutlined style={{fontSize: 8}}/>
            </div>;
        }
        if (type === 'next') {
            return <div className={`${styles.pagination_next} `}>
                <RightOutlined style={{fontSize: 8}}/>
            </div>;
        }
        return <div className={`${styles.page} pagination-item-wrapper`}>
            <span>{originalElement}</span>
        </div>;
    }
    return (
        <div className={styles.pagination}>

            <Pagination defaultCurrent={currentPage} total={items} pageSize={pageSize} itemRender={itemRender} showSizeChanger={false} onChange={(page) =>changeCurrent(page) }/>
        </div>
    );
};

export default CustomPagination;
