import React from 'react';
import PageBase from '../../components/PageBase';
import Allemployees from '../../components/deploy/Allemployees';

const Showalle = () => {

  return (
    <PageBase title="Employees"
              navigation="Application / Employees">
      <div>
        <Allemployees/>
      </div>
    </PageBase>
  );
};

export default Showalle;
