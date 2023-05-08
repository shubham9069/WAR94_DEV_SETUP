import React from 'react'
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';
import Widget6 from './Widget6';
import Widget7 from './Widget7';

const Dashboard = () => {
  const obj={
display:'grid',
gridGap:20,
gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
placeContent:'center',
placeItems:'center'
  }
  return (
    <div className="section-padding">
    <div style={obj} >
    <Widget1 />
    <Widget2 />
    <Widget3 />
    <Widget4 />
    <Widget5 />
    <Widget6 />
   
</div>

   <Widget7  />
   
    </div>
  )
}

export default Dashboard