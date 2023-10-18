import { useRouteError } from 'react-router-dom';

import TCG from '../assets/TCG.png'
import CAC from '../assets/Cac.png'
import NoteHub from '../assets/NoteHub.png'
import SVGForge from '../assets/SVGForge.png'
// import CAC from '../../public/CAC.png'
// import NoteHub from  '../../public/NoteHub.png'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h2 className='text-warning'>Portfolio</h2>

      <div className='d-flex flex-wrap gap-1'>
        <div className='m-2'>
          <a href='https://github.com/jesk3r/TCG-Card-Tactics'>
            <img src={TCG} alt=""/>
          </a>
        </div>
        <div className='m-2'>
          <a href='https://github.com/jesk3r/Cocktail-and-Courage'>
            <img src={CAC} alt="" />
          </a>
        </div>
        <div className='m-2'>
          <a href='https://github.com/jesk3r/NoteCraft'>
            <img src={NoteHub} alt="" />
          </a>

        </div>
        <div className='m-2'>
          <a href='https://github.com/jesk3r/SVGForge'>
            <img src={SVGForge} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

//https://github.com/jesk3r/SVGForge
//https://github.com/jesk3r/NoteCraft
//https://github.com/jesk3r/Cocktail-and-Courage
//https://github.com/jesk3r/TCG-Card-Tactics