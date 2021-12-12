import React , {useState, useEffect} from 'react'
import './App.css';
import DisplayContainer from './Components/DisplayContainer';
import Filter from './Components/Filter'

function App() {
  //  SELECTORS
  const [data, setData] = useState(null)
  const [unChangeData, setUnChangeData] = useState(null)

  // FUNCTIONS
  useEffect(()=>{
    const FetchData = async ( )=> {
      let res = await fetch('https://www.gov.uk/bank-holidays.json')
      let data = await res.json()
      setData(data)
      setUnChangeData(data)
    }
    FetchData()
  },[])
   
  let newData = unChangeData
  let dataOne = null
  let dataTwo = null
  let dataThree = null
  let day = null

  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth()+1
  let date = today.getDate()
  let currentDay = `${year}-${month}-${date}`

  const selectFilter = (value)=>{

    if(value === "today" && data!==null){
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date === currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date === currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date === currentDay;
      })
    }

    else if(value === "tommorrow" && data!==null){
      day = `${year}-${month}-${date+1}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
    }

    else if(value === "yesterday" && data!==null){
      day = `${year}-${month}-${date-1}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
    }

    else if(value === "dayaftertommorrow" && data!==null){
      day = `${year}-${month}-${date+2}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
    }

    else if(value === "daybeforeyesterday" && data!==null){
      day = `${year}-${month}-${date-2}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
    }

    else if(value === "nextweek" && data!==null){
      day = `${year}-${month}-${date+7}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
    }

    else if(value === "previousweek" && data!==null){
      day = `${year}-${month}-${date-7}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
    }

    else if(value === "nextmonth" && data!==null){
      day = `${year}-${month+1}-${date}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date <= day && arr.date >= currentDay;
      })
    }

    else if(value === "previousmonth" && data!==null){
      day = `${year}-${month-1}-${date}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date >= day && arr.date <= currentDay;
      })
    }

    else if(value === "future" && data!==null){
      day = `${year}-${month}-${date}`
      dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
        return arr.date >= currentDay;
      })
      dataTwo = newData["scotland"].events.filter((arr,index)=>{
        return arr.date >= currentDay;
      })
      dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
        return arr.date >= currentDay;
      })
    }

    else{
      setData(newData)
    }

    if(dataOne!== null && dataTwo!==null && dataThree!==null){
      setData({"england-and-wales":{"events":[...dataOne]},"scotland":{"events":[...dataTwo]},"northern-ireland":{"events":[...dataThree]}})
    }
  }

  // RANGE SELECT
  const rangeHolder = {
     firstRange:{active:false, value:""},
     secondRange:{active:false, value:""}
  }

  const selectRange = (path,value)=>{
    if(value !== ""){
      rangeHolder[path].active = true
      rangeHolder[path].value = value
    }
    else{
      rangeHolder[path].active = false
      rangeHolder[path].value = ""
    }
    applyFilter()
  }

  const applyFilter = ()=>{
    if(rangeHolder.firstRange.active && rangeHolder.secondRange.active){
      if(rangeHolder.firstRange.value <= rangeHolder.secondRange.value){
        dataOne = newData["england-and-wales"].events.filter((arr,index)=>{
          return arr.date >= rangeHolder.firstRange.value && arr.date <= rangeHolder.secondRange.value;
        })
        dataTwo = newData["scotland"].events.filter((arr,index)=>{
          return arr.date >= rangeHolder.firstRange.value && arr.date <= rangeHolder.secondRange.value;
        })
        dataThree = newData["northern-ireland"].events.filter((arr,index)=>{
          return arr.date >= rangeHolder.firstRange.value && arr.date <= rangeHolder.secondRange.value;
        })
      }
    }
    else{
      console.log("please specify second range")
    }
    if(dataOne!== null && dataTwo!==null && dataThree!==null){
      setData({"england-and-wales":{"events":[...dataOne]},"scotland":{"events":[...dataTwo]},"northern-ireland":{"events":[...dataThree]}})
    }
  }


  return (
    <div>
      <Filter selectFilter={selectFilter} selectRange={selectRange} />
      {data!== null && <DisplayContainer data={data} />}
    </div>
  );
} 

export default App;
