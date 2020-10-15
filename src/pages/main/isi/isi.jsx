import React, { useEffect, useState } from "react";
import DateCountdown from 'react-date-countdown-timer';

const Isi = () => {





    return <React.Fragment>
        <DateCountdown dateTo='October 31, 2020 11:00:00 GMT+07:00' callback={() => alert('Hello')} />;


  </React.Fragment>
}


export default Isi;