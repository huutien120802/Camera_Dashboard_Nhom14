/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';

import sort from 'assets/Icons/sort.png';
import filter from 'assets/Icons/filter.png';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './index.module.css';

function DataTable({
  title, tableHead, data, loading, setSelectedRows,
}) {
  const [checkedCount, setCheckedCount] = useState(0);
  const [allRowsChecked, setAllRowsChecked] = useState(false);
  const [sortedData, setSortedData] = useState(data);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterValue, setFilterValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    const updatedData = sortedData.map((row) => ({ ...row, checked: isChecked }));
    setSortedData(updatedData);

    const selectedRowIds = updatedData
      .filter((row) => row.checked)
      .map((row) => row._id);
    setSelectedRows(selectedRowIds);
  };

  const handleRowCheckboxChange = (rowIndex) => (e) => {
    const isChecked = e.target.checked;
    const checkedCountDelta = isChecked ? 1 : -1;
    setCheckedCount((prevState) => prevState + checkedCountDelta);
    sortedData[rowIndex].checked = isChecked;
    setAllRowsChecked(checkedCount + checkedCountDelta === sortedData.length);

    const selectedRowIds = sortedData
      .filter((row) => row.checked)
      .map((row) => row._id);
    setSelectedRows(selectedRowIds);
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

  useEffect(() => {
    const filtered = data.filter((row) => {
      if (row.time) {
        const rowDate = new Date(row.time).toISOString().split('T')[0];
        const selectedDateLocal = new Date(selectedDate);
        selectedDateLocal.setDate(selectedDateLocal.getDate() + 1);
        const selectedDateMinusOneDay = selectedDateLocal.toISOString().split('T')[0];
        return rowDate === selectedDateMinusOneDay;
      }
      return false;
    });

    setSortedData(filtered);
  }, [selectedDate]);

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer}>
        <div className={styles.Title}>
          {title === 'Thống kê' ? (
            <div>
              <div>{title}</div>
              <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            </div>
          ) : { title }}
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
                    <input type="checkbox" checked={!!row.checked} onChange={handleRowCheckboxChange(rowIndex)} />

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
  setSelectedRows: PropTypes.func,
};

DataTable.defaultProps = {
  setSelectedRows: () => {},
};

export default DataTable;
