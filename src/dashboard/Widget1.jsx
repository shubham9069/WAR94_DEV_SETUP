import React, { useEffect } from 'react'
import * as echarts from 'echarts';
import {BsChevronDown} from 'react-icons/bs';
const Widget1 = () => {

    
    function widgetchart(){

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);

var option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show:false
    },
    yAxis: {
      type: 'value',
      show:false
    },
    
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        color: ['#fff']
        
      }
      
    ],
    
  };
  {option && myChart.setOption(option)};

}
useEffect(()=>{

    widgetchart()
},[])
  return (
    <>
                
        <div className="widget-container widget-width">
            <div>
            <div style={{display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{color:'white',marginBottom:0,fontWeight:600,letterSpacing:1.4}}> Tournament Stats</p>
            
            <a className="exportbtn link-a">Export  <i class="bi bi-chevron-down" style={{color:'white',marginLeft:5}} ></i> </a>
           
            </div>
            <div id="main" style={{height:'100%',width:'100%'}}></div>
            </div>

            <div  style={{position:'relative'}}>
            <div className="widget-box-section widget-grid">
            <div className="widget-box " style={{background: '#FFF4DE'}}>

                <h5 className='widget-box-h5' style={{color:'#FFA800'}}>300</h5>
                <span  className="widget-box-span" style={{ color: '#634100'}}>Today</span>
            </div>
            <div className="widget-box " style={{background: '#FFE2E6'}}>
                <h5 className='widget-box-h5'  style={{color:'#F1416C'}}>300</h5>
                <span className="widget-box-span" style={{ color: '#F65464'}}>Today</span>
            </div>
            <div className="widget-box " style={{background: '#EEE5FF'}}>
                <h5 className='widget-box-h5'  style={{color:'#7239EA'}}>300</h5>
                <span className="widget-box-span" style={{ color: '#8A50FC'}}>Today</span>
            </div>
            <div className="widget-box " style={{background: ' #C9F7F5'}}>
                <h5 className='widget-box-h5'  style={{color:'#0BB783'}}>300</h5>
                <span  className="widget-box-span" style={{ color: '#74BBB7'}}>Today</span>
            </div>

            </div>
            </div>
        </div>
    </>
  )
}

export default Widget1