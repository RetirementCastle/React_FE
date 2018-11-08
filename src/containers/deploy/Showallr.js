import React from 'react';
import PageBase from '../../components/PageBase';
import Allresidents from '../../components/deploy/Allresidents';

const Showallr = () => {

  return (
    <PageBase title="Residents"
              navigation="Application / Residents">
      <div>
        <Allresidents/>
      </div>
    </PageBase>
  );
};

export default Showallr;