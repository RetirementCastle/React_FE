import React from 'react';
import PageBase from '../../components/PageBase';
import DeployEmpl from '../../components/deploy/DeployEmpl';

const EmployeeInfo = () => {

  return (
    <PageBase title="Employee Information"
              navigation="Application / Employee Information">
      <div>
        <DeployEmpl/>
      </div>
    </PageBase>
  );
};

export default EmployeeInfo;
