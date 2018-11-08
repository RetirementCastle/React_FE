import React from 'react';
import PageBase from '../../components/PageBase';
import AllNH from '../../components/deploy/AllNH';

const ShowallNH = () => {

  return (
    <PageBase title="Hogares Gediatricos"
              navigation="Application / Hogares Gediatricos">
      <div>
        <AllNH/>
      </div>
    </PageBase>
  );
};

export default ShowallNH;