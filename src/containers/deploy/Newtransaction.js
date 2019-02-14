import React from 'react';
import PageBase from '../../components/PageBase';
import NewT from '../../components/deploy/NewT';

const Newtransaction = () => {

  return (
    <PageBase title="Cerate transaction"
              navigation="Application / Cerate Transaction">
      <div>
        <NewT/>
      </div>
    </PageBase>
  );
};

export default Newtransaction;
