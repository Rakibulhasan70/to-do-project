import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {

    return (
        <div className='w-50 mx-auto my-5'>
            <DayPicker />
        </div>
    );
};

export default Calendar;