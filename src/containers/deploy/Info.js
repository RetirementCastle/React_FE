import React from 'react';
import PageBase from '../../components/PageBase';
import Deploy from '../../components/deploy/Deploy';

const Info = () => {

  return (
    <PageBase title="Resident Information"
              navigation="Application / Resident Information">
      <div>
        <Deploy/>
      </div>
    </PageBase>
  );
};

export default Info;
