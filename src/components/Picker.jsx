import React, { useEffect } from 'react';
import SectionsWrapper from '../hoc/SectionsWrapper'; 
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import DropDownMenu from './DropDownMenu';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';



const Picker = () => {

  
  const navigate = useNavigate();
  const [selectedKayakArea,setSelectedKayakArea]=useState('');
  const [pickupDate, setPickupDate] = useState(localStorage.getItem('pickupDate') || '');
  const [droppingDate, setDroppingDate] = useState(localStorage.getItem('droppingDate') || '');



  useEffect(()=>{
    localStorage.setItem('pickupDate',pickupDate);
    localStorage.setItem('droppingDate',droppingDate)
  },[pickupDate,droppingDate])

  
  const handleSearchKayak = () => {
    if (selectedKayakArea) {
      navigate(`/resultPage?location=${selectedKayakArea}`);
    }
  };
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className='flex  flex-center justify-center '>
      <div className=' flex sm:flex-row flex-col  items-center justify-center p-4 rounded-lg w-[1000px]  sm:h-[120px] h-[600px] border border-[#FEC600] gap-5 shadow-lg '>
        <div className='flex-col justify-start '>
          <h3 className='text-[#3f3f3f] mb-3'>Pick Up Date</h3>
         <DatePicker 
          value={dayjs(pickupDate)}
          onChange={(date)=>setPickupDate(date)}
         />
        </div>
        <div className='flex-col justify-start '>
        <h3 className='text-[#3f3f3f] mb-3'>Dropping Date</h3>
         <DatePicker
          value={dayjs(droppingDate)}
          onChange={(date)=>setDroppingDate(date)}
         />
        </div>
        <div className=''>
          <h3 className=' text-[#3f3f3f] mb-3'>PickUp Location</h3>
          <DropDownMenu selectedKayakArea={selectedKayakArea} setSelectedKayakArea={setSelectedKayakArea}/>
        </div>
        <div className=' '>
          <button
            type="button"
            className="focus:outline-none text-white-600 bg-[#6A2AF7] hover:bg-[#6A2AF7] focus:ring-4 focus:ring-[#6A2AF7] font-medium rounded-lg text-sm h-[55px] w-[150px] mt-8 dark:bg-[#6A2AF7]:hover:bg-[#6A2AF7] dark:focus:ring-[#6A2AF7] !important"
            onClick={handleSearchKayak}
          >
              Search Kayak
          </button>
        </div>

      </div>
    </div>
    </LocalizationProvider>
  );
};

export default SectionsWrapper(Picker, "picker");
