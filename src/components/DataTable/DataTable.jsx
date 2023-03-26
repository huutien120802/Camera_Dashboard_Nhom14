import React from 'react';
import PropTypes from 'prop-types';

import sort from 'assets/Icons/sort.png';
import filter from 'assets/Icons/filter.png';

import styles from './index.module.css';

function DataTable({ title, tableHead, data }) {
  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <div className={styles.Title}>
          {title}
        </div>

        <div className={styles.TitleContainerRight}>
          <div className={styles.IconContainer}>
            <img src={sort} alt="sort" />

            Sort
          </div>

          <div className={styles.IconContainer}>
            <img src={filter} alt="filter" />

            Filter
          </div>
        </div>
      </div>

      <div className={styles.Table}>
        <div className={styles.HeadContainer}>
          <div className={styles.HeadRowContainer}>
            <input type="checkbox" />

            {Object.keys(tableHead).map((key) => (
              <div key={key}>{tableHead[key]}</div>
            ))}

            <span className={styles.HeadDivider} />
          </div>
        </div>

        <div className={styles.BodyContainer}>
          {data.map((row) => (
            <div key={row.id} className={styles.RowContainer}>
              <input type="checkbox" />

              {Object.keys(row).slice(1).map((key) => (
                <div key={key}>{row[key]}</div>
              ))}

              <span className={styles.Divider} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  tableHead: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

export default DataTable;
