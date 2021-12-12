import React from 'react'

function Filter(props) {
    return (
        <div>
            <div className="filter-area">
                <div className='select'>
                    <select onClick={(e)=>{props.selectFilter(e.target.value)}}>
                        <option value="">All</option>
                        <option value="today">today</option>
                        <option value="tommorrow">tommorrow</option>
                        <option value="yesterday">yesterday</option>
                        <option value="dayaftertommorrow">day-after-tommorrow</option>
                        <option value="daybeforeyesterday">day-before-yesterday</option>
                        <option value="nextweek">next-week</option>
                        <option value="previousweek">previous-week</option>
                        <option value="nextmonth">next-month</option>
                        <option value="previousmonth">previous-month</option>
                        <option value="future">future-days</option>
                    </select>
                </div>
                <div className='range'>
                    <input type="date" onChange={(e)=>{props.selectRange("firstRange", e.target.value)}}></input>
                    <input type="date" onChange={(e)=>{props.selectRange("secondRange", e.target.value)}}></input>
                </div>
            </div>
        </div>
    )
}

export default Filter
