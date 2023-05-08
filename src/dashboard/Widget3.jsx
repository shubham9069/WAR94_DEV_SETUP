import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const Widget3 = () => {

    function widgetchart(){

        var chartDom = document.getElementById('widget3');
        var myChart = echarts.init(chartDom);
        
        var option = {
            
            tooltip: {
              trigger: 'axis'
            },
           
           
            calculable: true,
            xAxis: [
              {
                type: 'category',
                // prettier-ignore
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', ],
                show:false
              }
            ],
            yAxis: [
              {
                type: 'value',
                show:false
              }
            ],

            series: [
              {
                name: 'Rainfall',
                type: 'bar',
                data: [135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ],
                color:'white',
                itemStyle: {
                    emphasis: {
                        barBorderRadius: [50, 50]
                    },
                    normal: {
                        barBorderRadius: [50, 50, 0 ,0 ]
                    }
                }
               
                
              },
              {
                name: 'Evaporation',
                type: 'bar',
                data: [
                  2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 
                ],
                color:'rgba(255, 255, 255, 0.3)',
                itemStyle: {
                    emphasis: {
                        barBorderRadius: [50, 50]
                    },
                    normal: {
                        barBorderRadius: [50, 50, 0 ,0 ]
                    }
                }
                
              }
            ]
          };
          {option && myChart.setOption(option)};
        
        }
        
        useEffect(()=>{
        
            widgetchart()
        },[])
  return (
    <>

         
<div className="widget-container widget-width">
            <div style={{
                background: 'radial-gradient(50% 38.76% at 50% 31.25%, #FF6A7A 0%, #F64E60 100%)'
                ,boxShadow: '0px 4px 35px rgba(181, 181, 195, 0.15)'
            }}>
            <div style={{display: 'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{color:'white',marginBottom:0,fontWeight:600,letterSpacing:1.4}}> Payment</p>
            
            <a className="exportbtn link-a">Export</a>
           
            </div>
            <div id="widget3" style={{height:'100%',width:'100%'}}></div>
            </div>

            <div  style={{position:'relative'}}>
            <div className="widget3"></div>
            <div className="widget3-box widget-grid">

            <div>
                <span className='widget-box-span' style={{color:'#80808F'}}>Today</span>
                <h5 className='widget-box-h5' style={{color:'#464E5F',marginBottom:0}}>₹650</h5>
            </div>
            <div>
                <span className='widget-box-span' style={{color:'#80808F'}}>Today</span>
                <h5 className='widget-box-h5' style={{color:'#464E5F',marginBottom:0}}>₹650</h5>
            </div>
            <div>
                <span className='widget-box-span' style={{color:'#80808F'}}>Today</span>
                <h5 className='widget-box-h5' style={{color:'#464E5F',marginBottom:0}}>₹650</h5>
            </div>
            <div>
                <span className='widget-box-span' style={{color:'#80808F'}}>Today</span>
                <h5 className='widget-box-h5' style={{color:'#464E5F',marginBottom:0}}>₹650</h5>
            </div>


            </div>
        </div>

</div>


    </>
  )
}

export default Widget3