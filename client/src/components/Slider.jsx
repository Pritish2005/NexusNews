import React from 'react';

function Slider({ modeData }) {
  console.log(modeData);

  return (
    <div className='flex w-full h-4 px-12'>
      <div className='bg-blue-500 flex items-center justify-center' style={{ width: `${modeData.left}%`, minHeight: '1rem' }}>
        {modeData.left > 10 ? `${Math.ceil(modeData.left)-1}%` : ''}
      </div>
      <div className='bg-slate-300 flex items-center justify-center' style={{ width: `${modeData.center}%`, minHeight: '1rem' }}>
        {modeData.center > 10 ? `${Math.ceil(modeData.center)-1}%` : ''}
      </div>
      <div className='bg-red-500 flex items-center justify-center' style={{ width: `${modeData.right}%`, minHeight: '1rem' }}>
        {modeData.right > 10 ? `${Math.ceil(modeData.right)-1}%` : ''}
      </div>
    </div>
  );
}

export default Slider;
