import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {

    return (
        <div className='container'>
            <h2 className='mb-5'>Calendar</h2>
            <DayPicker />
        </div>
    );
};

export default Calendar;