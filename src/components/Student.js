import React from 'react';

const Student = (props) => {
  const { info } = props;

  return(
    <section style={{ margin: '10px', border: '1px solid blakc'}}>
      <h3>
        {info.name} - {info.country}
      </h3>
    </section>
  )
}

export default Student;