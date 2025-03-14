import React from 'react'
import FlipClock from 'x-react-flipclock'

export const FlipCountdown = ({type, to}) => {
  return (
    <FlipClock type={type}
    count_to={to}
    />
  )
}

// units = {[
//     {
//         sep: '',
//         type: 'days',
//         title: 'day',
//     },
//     {
//         sep: '/',
//         type: 'months',
//         title: 'month',
//     },
//     {
//         sep: '/',
//         type: 'years',
//         title: 'year',
//     },
//     {
//         sep: ' ',
//         type: 'hours',
//         title: 'hour',
//     },
//     {
//         sep: ':',
//         type: 'minutes',
//         title: 'minute',
//     },
//     {
//         sep: ':',
//         type: 'seconds',
//         title: 'second',
//     }
// ]}