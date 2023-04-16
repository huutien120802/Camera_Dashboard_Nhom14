import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllLocations } from 'store/actions';

import DataTable from 'components/DataTable/DataTable';

const tableHead = {
  id: 'ID', serial: 'Serial', profile: 'Profile', activate: 'Activate',
};

function LocationPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Location);

  useEffect(() => {
    dispatch(actionGetAllLocations());
  }, []);

  return (
    <DataTable title="Khu vực" data={data.locations} tableHead={tableHead} loading={data.loading} />
  );
}

export default LocationPage;
