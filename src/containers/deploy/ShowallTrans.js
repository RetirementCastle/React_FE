import React from 'react';
import PageBase from '../../components/PageBase';
import AllTrans from '../../components/deploy/AllTrans';

const ShowallTrans = () => {

  return (
    <PageBase title="Hogares Gediatricos"
              navigation="Application / Hogares Gediatricos">
      <div>
        <AllTrans/>
      </div>
    </PageBase>
  );
};

export default ShowallTrans;