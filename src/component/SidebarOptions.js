import { Add } from '@mui/icons-material';
import React from 'react';
import "../css/SidebarOptions.css";

const SidebarOptions = () => {
  return (
    <div className='sidebarOptions'>
      <div className="sidebarOption">
        <Add  />
        <p className='text'>Discover Spaces</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://seeklogo.com/images/H/history-logo-4EA08324CE-seeklogo.com.png'
        alt='img upload'
        />
        <p>History</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRar9J9w7-moNSWrry7UBUUnhKtnaHxa9Xd1Q&usqp=CAU'
        alt='img upload'
        />
        <p>Science</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39CKdhhoUYNjLYT4qPzVlVR6JqT44K3g60eJN6v3rpuEB3W_c03XeCAHO1WVryZ21-nc&usqp=CAU'
        alt='img upload'
        />
        <p>Technology</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://johncarlosbaez.files.wordpress.com/2021/04/683px-local_group.svg_.png?w=450&h=337'
        alt='img upload'
        />
        <p>Big Bang Cosmology</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhkN_McFYiiMem5lU2-T8snu51QHpaEyyUgilZbspf042-IbgcWSuDHK2PQSRHhV2hjM&usqp=CAU'
        alt='img upload'
        />
        <p>The Big Bang</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPokdnmEHFIawks1WdxE1tEbMWrTEeb2jWQ&usqp=CAU'
        alt='img upload'
        />
        <p>Galaxies</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YS3Ano6pe582ws2WY80Fp_ZHVR8nJBrrJgJQAriBOTN_KWQnF2H-AQI-gK5YtiGeGVQ&usqp=CAU'
        alt='img upload'
        />
        <p>Stars(astronomic...</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://sites.google.com/site/leplebtoucan/_/rsrc/1468848346570/home/products-services/320px-World_line2.svg.png?height=284&width=320'
        alt='img upload'
        />
        <p>Special Relativity</p>
      </div>
      <div className="sidebarOption">
        <img 
        src='https://www.mathsisfun.com/calculus/images/integral-tap-tank-2x.svg'
        alt='img upload'
        />
        <p>Integration(mathematics)</p>
      </div>

    </div>
  );
}

export default SidebarOptions;
