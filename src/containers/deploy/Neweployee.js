import React from 'react';
import PageBase from '../../components/PageBase';
import NewE from '../../components/deploy/NewE';

const Neweployee = () => {

  return (
    <PageBase title="Cerate Employee"
              navigation="Application / Cerate Employee">
      <div>
        <NewE/>
      </div>
    </PageBase>
  );
};

export default Neweployee;
