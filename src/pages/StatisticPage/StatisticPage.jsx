import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllStatistics } from 'store/actions';

import DataTable from 'components/DataTable/DataTable';

import tick from 'assets/Icons/tick.png';
import trash from 'assets/Icons/trash.png';

import styles from './index.module.css';

const tableHead = {
  profile: 'Profile', location: 'Khu vực', serial: 'Serial', data: 'Thời gian',
};

function StatisticPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Statistics);

  useEffect(() => {
    dispatch(actionGetAllStatistics());
  }, []);

  return (
    <>
      <div className={styles.FunctionalContainer}>
        <div>Nút chuyển thống kê và đếm người</div>

        <div className={styles.FunctionalContainerRight}>
          <div className={styles.IconContainer}>
            <img src={tick} alt="tick" />

            Đánh dấu đã đọc
          </div>

          <div className={styles.IconContainer}>
            <img src={trash} alt="trash" />

            Xóa thông báo
          </div>
        </div>
      </div>

      <DataTable title="Thống kê" data={data.statistics} tableHead={tableHead} loading={data.loading} />
    </>
  );
}

export default StatisticPage;
