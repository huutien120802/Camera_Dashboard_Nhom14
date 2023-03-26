import React from 'react';

import DataTable from 'components/DataTable/DataTable';

const data = [
  {
    id: 1, serial: 'ABC123-456789', homeId: 'H56213454', connection: 'Connecting', level: 'High',
  },
  {
    id: 2, serial: 'DEF456-fds789', homeId: 'H56213454', connection: 'Disconnected', level: 'Normal',
  },
];

const tableHead = {
  serial: 'Serial', homeId: 'Home ID', connection: 'Connection', level: 'Security Level',
};

function CamerasPage() {
  return (
    <DataTable title="Camera" data={data} tableHead={tableHead} />
  );
}

export default CamerasPage;
