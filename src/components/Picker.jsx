import React from 'react';
import SectionsWrapper from '../hoc/SectionsWrapper'; 
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DropDownMenu from './DropDownMenu';


const Picker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className='flex flex-center justify-center '>
      <div className=' flex flex-row items-center justify-center p-4 rounded-lg w-[1000px] h-[120px] border border-[#FEC600] gap-5 shadow-lg '>
        <div className='flex-col justify-start '>
          <h3 className='text-[#3f3f3f] mb-3'>Pick Up Date</h3>
         <DatePicker/>
        </div>
        <div className='flex-col justify-start '>
        <h3 className='text-[#3f3f3f] mb-3'>Dropping Date</h3>
         <DatePicker/>
        </div>
        <div className=''>
          <h3 className=' text-[#3f3f3f] mb-3'>PickUp Location</h3>
          <DropDownMenu/>
        </div>
        <div className=' '>
          <button
            type="button"
            className="focus:outline-none text-white-600 bg-[#6A2AF7] hover:bg-[#6A2AF7] focus:ring-4 focus:ring-[#6A2AF7] font-medium rounded-lg text-sm h-[55px] w-[150px] mt-8 dark:bg-[#6A2AF7]:hover:bg-[#6A2AF7] dark:focus:ring-[#6A2AF7] !important"
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
