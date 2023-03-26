import React from 'react';

import DataTable from 'components/DataTable/DataTable';

const data = [];

const tableHead = {
  id: 'ID', serial: 'Serial', profile: 'Profile', activate: 'Activate',
};

function LocationPage() {
  return (
    <DataTable title="Khu vực" data={data} tableHead={tableHead} />
  );
}

export default LocationPage;
