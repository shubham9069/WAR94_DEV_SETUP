import React from 'react'

const Room_Tab1 = () => {
  return (
    <>
       <div className="inputwrapper">
                <p className='span-text-dark' >Room status</p>
                <p style={{color:'#5E6278',fontWeight:400}} >solo</p>
        </div>
       <div className="inputwrapper">
                <p className='span-text-dark' >Tournamnet  </p>
                <p style={{color:'#00A3FF',fontWeight:400}} >BGMI Solo 12:00 PM</p>
        </div>
       <div className="inputwrapper">
                <p className='span-text-dark' >Match Type</p>
                <p style={{color:'#5E6278',fontWeight:400}} >FTP</p>
        </div>
       <div className="inputwrapper">
                <p className='span-text-dark' >Updated date</p>
                <p style={{color:'#5E6278',fontWeight:400}} >15:00 Am</p>
        </div>
       <div className="inputwrapper">
                <p className='span-text-dark' ></p>
                <button className='themeButton'>Save</button>
        </div>
       
    </>
  )
}

export default Room_Tab1