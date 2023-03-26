import React from 'react';

import DataTable from 'components/DataTable/DataTable';

import tick from 'assets/Icons/tick.png';
import trash from 'assets/Icons/trash.png';
import setting1 from 'assets/Icons/setting1.png';

import styles from './index.module.css';

const data = [
  {
    id: 1, content: 'Cảnh báo người lạ', location: 'H56213454', serial: 'DEF456-fds789', level: 'High', playback: 'Playbacks',
  },
];

const tableHead = {
  content: 'Nội dung', location: 'Khu vực', serial: 'Serial', level: 'Mức độ', playback: 'Playbacks',
};

function WarningPage() {
  return (
    <>
      <div className={styles.FunctionalContainer}>
        <div className={styles.IconContainer}>
          <img src={tick} alt="tick" />

          Đánh dấu đã đọc
        </div>

        <div className={styles.IconContainer}>
          <img src={trash} alt="trash" />

          Xóa thông báo
        </div>

        <div className={styles.IconContainer}>
          <img src={setting1} alt="setting1" />

          Cài đặt cảnh báo
        </div>
      </div>

      <DataTable title="Lịch sử cảnh báo" data={data} tableHead={tableHead} />
    </>
  );
}

export default WarningPage;
