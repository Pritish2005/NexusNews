import React from 'react';

function Slider({modeData}) {
  console.log(modeData);

  return (
    <div className='flex w-full h-4 px-12'>
      <div className='bg-blue-500' style={{ width: `${modeData.left}%`, minHeight: '1rem' }}></div>
      <div className='bg-slate-300' style={{ width: `${modeData.center}%`, minHeight: '1rem' }}></div>
      <div className='bg-red-500' style={{ width: `${modeData.right}%`, minHeight: '1rem' }}></div>
    </div>
  );
}

export default Slider;
