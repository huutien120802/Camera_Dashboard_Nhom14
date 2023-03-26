import React from 'react';

import DataTable from 'components/DataTable/DataTable';

import tick from 'assets/Icons/tick.png';
import trash from 'assets/Icons/trash.png';

import styles from './index.module.css';

const data = [
  {
    id: 1, profile: 'Hưng', location: 'H56213454', serial: 'DEF456-fds789', data: '21/2/2023 17:16:15',
  },
];

const tableHead = {
  profile: 'Profile', location: 'Khu vực', serial: 'Serial', data: 'Thời gian',
};

function StatisticPage() {
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

      <DataTable title="Thống kê" data={data} tableHead={tableHead} />
    </>
  );
}

export default StatisticPage;
