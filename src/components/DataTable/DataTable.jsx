/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import sort from 'assets/Icons/sort.png';
import filter from 'assets/Icons/filter.png';

import styles from './index.module.css';

function DataTable({
  title, tableHead, data, loading,
}) {
  const [checkedCount, setCheckedCount] = useState(0);
  const [allRowsChecked, setAllRowsChecked] = useState(false);
  const [sortedData, setSortedData] = useState(data);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterValue, setFilterValue] = useState('');

  const handleSortClick = (column) => () => {
    let order = 'asc';

    if (sortColumn === column && sortOrder === 'asc') {
      order = 'desc';
    }

    setSortColumn(column);
    setSortOrder(order);

    const sorted = [...data].sort((a, b) => {
      const columnA = a[column].toUpperCase();
      const columnB = b[column].toUpperCase();

      let comparison = 0;
      if (columnA > columnB) {
        comparison = 1;
      } else if (columnA < columnB) {
        comparison = -1;
      }

      return order === 'desc' ? comparison * -1 : comparison;
    });

    setSortedData(sorted);
  };

  const handleFilterClick = (value) => () => {
    const filtered = [...data]
      .filter((row) => Object.keys(row).some((key) => row[key].includes(value)));

    setSortedData(filtered);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setAllRowsChecked(isChecked);
    const checkedCountDelta = isChecked ? sortedData.length : -checkedCount;
    setCheckedCount((prevState) => prevState + checkedCountDelta);
    sortedData.forEach((row) => {
      row.checked = isChecked;
    });
  };

  const handleRowCheckboxChange = (rowIndex) => (e) => {
    const isChecked = e.target.checked;
    const checkedCountDelta = isChecked ? 1 : -1;
    setCheckedCount((prevState) => prevState + checkedCountDelta);
    sortedData[rowIndex].checked = isChecked;
    setAllRowsChecked(checkedCount + checkedCountDelta === sortedData.length);
  };

  useEffect(() => {
    const count = sortedData.reduce((acc, row) => (row.checked ? acc + 1 : acc), 0);
    setCheckedCount(count);
    setAllRowsChecked(count === sortedData.length);
  }, [sortedData]);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  useEffect(() => {
    let sorted = [...data];

    if (sortColumn !== '') {
      sorted = sorted.sort((a, b) => {
        const columnA = a[sortColumn].toUpperCase();
        const columnB = b[sortColumn].toUpperCase();

        let comparison = 0;
        if (columnA > columnB) {
          comparison = 1;
        } else if (columnA < columnB) {
          comparison = -1;
        }

        return sortOrder === 'desc' ? comparison * -1 : comparison;
      });
    }

    setSortedData(sorted);
  }, [data, sortColumn, sortOrder]);

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <div className={styles.Title}>
          {title}
        </div>

        <div className={styles.TitleContainerRight}>
          <button type="button" className={styles.IconContainer} onClick={handleSortClick(Object.keys(tableHead)[0])}>
            <img src={sort} alt="sort" />

            Sort
          </button>

          <input type="text" value={filterValue} onChange={handleFilterChange} className={styles.FilterInput} />

          <button type="button" className={styles.IconContainer} onClick={handleFilterClick(filterValue)}>
            <img src={filter} alt="filter" />

            Filter
          </button>
        </div>
      </div>

      <div className={styles.Table}>
        <div className={styles.HeadContainer}>
          <div className={styles.HeadRowContainer}>
            <input type="checkbox" checked={allRowsChecked} onChange={handleCheckboxChange} id="head" />

            {Object.keys(tableHead).map((key) => (
              <div key={key}>{tableHead[key]}</div>
            ))}

            <span className={styles.HeadDivider} />
          </div>
        </div>

        <div className={styles.BodyContainer}>
          {loading
            ? (
              <div className={styles.Loading} />
            )
            : (
              <div>
                {sortedData.map((row, rowIndex) => (
                  <div key={row._id} className={styles.RowContainer}>
                    <input type="checkbox" checked={row.checked} onChange={handleRowCheckboxChange(rowIndex)} />
                    {Object.keys(row).slice(1).map((key) => (
                      <div key={key}>{row[key]}</div>
                    ))}
                    <span className={styles.Divider} />
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  tableHead: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DataTable;
