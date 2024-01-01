import React from 'react'
import "./booking.css"
function Booking() {
  return (
    <div className="booking">
     
    <div className="book">

      <div className="promo">
      
        
          <h3> book now & get an additional 10% off</h3>
          <p> hurry up!</p>
        </div>

        <div className="forms">

          <form>
            <label className='label'> destination</label>

            <select> <option value="1">matheran </option>  
            </select>

              <label className='label'> check in </label>
                <input type="date"/>      
                
                 <label className='label'> check out </label>
                <input type="date"/>

          </form>
          <button className=" button">book know</button>
        </div>

        </div>

      </div>
  )
}

export default Booking