import "./list.css"
import Header from '../../components/header/Header'
import Navbar  from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns";
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
const List = () => {

  const location = useLocation()
  const  [destination,setDestination] = useState(location.state.destination)
  const  [date,setDate] = useState(location.state.date)
  const  [options,setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destionation</label>
                <input placeholder={destination} type="text" name="" id="" />
            </div>
            <div className="lsItem">
              <label >Check-in-date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
             {openDate && <DateRange
                onChange={item=>setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" className="lsOptionInput"></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptiontext">Max price <small>per night</small></span>
                  <input type="number" className="lsOptionInput"></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptiontext">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptiontext">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children}></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptiontext">Room</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room}></input>
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List