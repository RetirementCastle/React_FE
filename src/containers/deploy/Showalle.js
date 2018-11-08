import React from 'react';
import PageBase from '../../components/PageBase';
import Allemployees from '../../components/deploy/Allemployees';

const Showalle = () => {

  return (
    <PageBase title="Residents"
              navigation="Application / Residents">
      <div>
        <Allemployees/>
      </div>
    </PageBase>
  );
};

export default Showalle;
