import React from 'react';

import styles from './index.module.css';

const tableHead = {
  name: 'Họ và tên', email: 'Email', mssv: 'Mã số sinh viên',
};

const tableData = [
  {
    _id: '1', name: 'Phan Lê Minh Lộc', email: '20110673@student.hcmute.edu.vn', mssv: '20110673',
  },
  {
    _id: '2', name: 'Bùi Bá Lộc', email: '20110671@student.hcmute.edu.vn', mssv: '20110671',
  },
  {
    _id: '3', name: 'Đặng Hữu Tiến', email: '20110734@student.hcmute.edu.vn', mssv: '20110734',
  },
];

function ContactPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <div className={styles.Title}>
          Liên hệ
        </div>
      </div>

      <div className={styles.Table}>
        <div className={styles.HeadContainer}>
          <div className={styles.HeadRowContainer}>
            {Object.keys(tableHead).map((key) => (
              <div key={key}>{tableHead[key]}</div>
            ))}

            <span className={styles.HeadDivider} />
          </div>
        </div>

        <div className={styles.BodyContainer}>

          <div>
            {tableData.map((row) => (
              <div key={row._id} className={styles.RowContainer}>
                {Object.keys(row)
                  .filter((key) => !(Object.prototype.hasOwnProperty.call(row, 'checked')
                      && key === 'checked')
                      && key !== '_id'
                      && key !== 'isReaded'
                      && key !== 'videoId'
                      && key !== 'isAdmin')
                  .map((key) => (
                    <div key={key} className={row.isReaded ? styles.IsRead : ''}>
                      {key === 'serial' ? row[key].replace(/,/g, '\n') : row[key]}
                    </div>
                  ))}

                <span className={styles.Divider} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
