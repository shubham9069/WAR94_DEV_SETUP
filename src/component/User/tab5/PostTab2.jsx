import React from 'react'

const PostTab2 = () => {
  return (
   <>
{[...Array(6)]?.map((a)=>{

    return <div className="followers-box padding15rem center-div" style={{flex:1}}>
    <img src="images/users.png" style={{width:50,height:50,borderRadius:'50%'}}></img>

    <h6 style={{fontWeight:800,marginBottom:0}}>Kanika</h6>
    <p className="span-text-light" style={{fontWeight:800,marginBottom:0}}>@kck</p>

    <div className="d-flex" style={{gridGap:15}}>
        <div style={{padding:'1rem 2.5rem 1rem 1rem ',border: '1.04481px dashed #E4E6EF',borderRadius: '6.26885px'}}>
            <p className='span-text-dark' style={{marginBottom:0,fontWeight:900,fontSize:18}}>30</p>
            <span className='span-text-light'>Followers</span>
        </div>
        <div style={{padding:'1rem 2.5rem 1rem 1rem ',border: '1.04481px dashed #E4E6EF',borderRadius: '6.26885px'}}>
            <p className='span-text-dark' style={{marginBottom:0,fontWeight:900,fontSize:18}}>30</p>
            <span className='span-text-light'>Following</span>
        </div>
    </div>
</div>
})}








   </>
  )
}

export default PostTab2