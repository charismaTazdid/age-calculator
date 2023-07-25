import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './hooks/useCountdown';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
        </div>
    );
};

const ShowCounter = ({ years, months, days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <span className="countdown-link">
                <DateTimeDisplay value={years} type={'Years'} isDanger={true} />
                <p>:</p>
                <DateTimeDisplay value={months} type={'Months'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={days} type={'Days'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </span>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [years, months, days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                years={years}
                months={months}
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;