import React from 'react'

const Tournamentdetails = () => {
  return (
    <>

<div className=" user-permission-tab padding15rem">
<div className='between-div' style={{borderBottom:'1px solid #EFF2F5',paddingBottom:'1rem'}}>
<h5 style={{fontWeight:900,color:'#3F4254',marginBottom:0}}>Tournament Details</h5>
<div className='d-flex' style={{gridGap:15}}>
    <span className='span-box' style={{color:'#A1A5B7',background:'#F5F8FA'}}><span style={{color:'#5E6278'}}>Recent update</span> - 1-10-2022 12:42 PM</span>
    
</div>
</div>
<div className='d-flex' style={{gridGap:20,margin:'1.5rem 0',flexWrap:'wrap'}}>
  {[...Array(7)]?.map((a)=>{

    return<div className=' dropdown-toggle' style={{ minWidth:215,cursor:'pointer',padding: '1rem',border: '1.04481px dashed rgb(228, 230, 239)', borderRadius: 6.26885,width:180}} data-bs-toggle="dropdown" aria-expanded="false">
    <p className='span-text-dark' style={{marginBottom:0,fontWeight:900,fontSize:18}}>30</p>
            <span className='span-text-light'>Followers</span>
    
    </div>
    
    
  })}
    
  </div>

</div>
    </>
  )
}

export default Tournamentdetails