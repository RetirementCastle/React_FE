import React from 'react';
import PageBase from '../../components/PageBase';
import DeployNH from '../../components/deploy/DeployNH';

const NHInfo = () => {

  return (
    <PageBase title="Nursing Home Information"
              navigation="Application / Nursing Home Information">
      <div>
        <DeployNH/>
      </div>
    </PageBase>
  );
};

export default NHInfo;
