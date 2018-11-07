import React from 'react';
import PageBase from '../../components/PageBase';
import DeployNH from '../../components/deploy/DeployNH';

const NHInfo = () => {

  return (
    <PageBase title="Resident Information"
              navigation="Application / Resident Information">
      <div>
        <DeployNH/>
      </div>
    </PageBase>
  );
};

export default NHInfo;
