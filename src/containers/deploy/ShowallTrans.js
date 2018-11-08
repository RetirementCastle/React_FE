import React from 'react';
import PageBase from '../../components/PageBase';
import AllTrans from '../../components/deploy/AllTrans';

const ShowallTrans = () => {

  return (
    <PageBase title="Transacciones"
              navigation="Application / Transacciones">
      <div>
        <AllTrans/>
      </div>
    </PageBase>
  );
};

export default ShowallTrans;