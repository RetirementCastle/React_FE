import React from 'react';
import PageBase from '../../components/PageBase';
import NewR from '../../components/deploy/NewR';

const Newresident = () => {

  return (
    <PageBase title="Cerate Resident"
              navigation="Application / Cerate Resident">
      <div>
        <NewR/>
      </div>
    </PageBase>
  );
};

export default Newresident;
