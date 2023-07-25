import { useEffect, useState, useMemo } from 'react';

const useCountdown = (targetDate) => {
    const currentDate = new Date();

    const countDownDate = useMemo(() => new Date(targetDate), [targetDate]);
    const [timeDifference, setTimeDifference] = useState(currentDate - countDownDate);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDifference(new Date() - countDownDate);
        }, 1000);
        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(timeDifference, targetDate);
};
// Hook End 

const getReturnValues = (timeDiff, targetDate) => {

    const oneYear = 365 * 24 * 60 * 60 * 1000;
    const oneMonth = oneYear / 12;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    const years = Math.floor(timeDiff / oneYear);
    const months = Math.floor(timeDiff % oneYear / oneMonth);
    const days = Math.floor(timeDiff % oneMonth / oneDay);
    const hours = Math.floor(timeDiff % oneDay / oneHour);
    const minutes = Math.floor(timeDiff % oneHour / oneMinute);
    const seconds = Math.floor(timeDiff % oneMinute / oneSecond);

    // to count Leap Year and subtract the value from days
    const birthYear = new Date(targetDate).getFullYear()
    const count = leapYearCount(birthYear)

    return [years, months, days - count, hours, minutes, seconds];
};
export { useCountdown };



// Helper function to calculate LEAP YEAR
const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const leapYearCount = (year) => {
    const currentYear = new Date().getFullYear();
    let count = 0;

    for (let y = year; y <= currentYear; y++) {
        if (isLeapYear(y)) {
            count++;
        }
    }
    return count;
};
