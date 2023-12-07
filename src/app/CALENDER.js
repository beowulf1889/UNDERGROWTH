"use client";
import { useState } from 'react';
function CALENDER() {


    const HOURS_IN_DAY = 30;
    const DAYS_IN_WEEK = 3;
    const WEEKS_IN_LUNAR = 8;
    const LUNAR_IN_MONTH = {
        Brumtide: 3,
        Galetide: 3,
        Fernright: 2,
        Hallow: 1,
        Crestide: 3,
        Zeniths: 3,
        Waxtright: 2,
        Harvest: 1,
        Slickles: 3,
    }
    const months = {
        Brumtide: 24,
        Galetide: 24,
        Fernright: 16,
        Hallow: 8,
        Crestide: 24,
        Zeniths: 24,
        Waxtright: 16,
        Harvest: 8,
        Slickles: 24,
    };
    const lunarEmojis = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
     

    const days = Array.from({ length: DAYS_IN_WEEK }, (_, i) => i + 1);
    const lunarCycles = Array.from({ length: WEEKS_IN_LUNAR }, (_, i) => i + 1)
    return (
    <>
            {Object.entries(months).map(([month, weeksInMonth]) => {
                const lunarCyclesInMonth = Math.ceil(weeksInMonth / WEEKS_IN_LUNAR);
                return (
                    <div className='' key={month}>
                        <h1  className='flex justify-center aligh-center text-2xl bg-slate-950 '> {month}</h1>
                        {Array.from({ length: lunarCyclesInMonth }, (_, i) => i + 1).map((lunarCycle) => (
                            <div key={lunarCycle }  className=' odd: bg-slate-800 even:bg-slate-900' >
                               
                                <table>
                                    <tbody >
                                       
                                        <td className=''>🌖 </td>
                                        <td className=''>🌗</td>
                                        <td className=''>🌘</td>
                                        <td className=''>🌑</td>
                                        <td className=''>🌒</td>
                                        <td className=''>🌓</td>
                                        <td className=''>🌔</td>
                                        <td className=''>🌕</td>
                                    
                                        {days.map((day) => (
                                            <tr  className = ""key={day}>
                                                {lunarCycles.map((week) => (
                                                    
                                                    <td  >
                                                    
                                                    <input  type="text"  placeholder ={`Day ${day}`} className=' text-fuchsia-500 bg-transparent text-warning '/>
                                                    
                                                   

                                                    
                                                   
                                                    
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                );
            })}
        </>
    );
}
export { CALENDER }; 