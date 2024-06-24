import React, { useEffect } from 'react'
import * as echarts from 'echarts';
import { chartData } from '../dummydata/DummyData';

const Widget3 = () => {

  function widgetchart() {

    var chartDom = document.getElementById('widget3');
    var myChart = echarts.init(chartDom);
    myChart.setOption(chartData.Widget3);

  }

  useEffect(() => {

    widgetchart()
  }, [])
  return (
    <>


      <div className="widget-container widget-width">
        <div style={{
          background: 'radial-gradient(50% 38.76% at 50% 31.25%, #FF6A7A 0%, #F64E60 100%)'
          , boxShadow: '0px 4px 35px rgba(181, 181, 195, 0.15)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'white', marginBottom: 0, fontWeight: 600, letterSpacing: 1.4 }}> Payment</p>

            <a className="exportbtn link-a">Export</a>

          </div>
          <div id="widget3" style={{ height: '100%', width: '100%' }}></div>
        </div>

        <div style={{ position: 'relative' }}>
          <div className="widget3"></div>
          <div className="widget3-box widget-grid">

            <div>
              <span className='widget-box-span' style={{ color: '#80808F' }}>Today</span>
              <h5 className='widget-box-h5' style={{ color: '#464E5F', marginBottom: 0 }}>₹650</h5>
            </div>
            <div>
              <span className='widget-box-span' style={{ color: '#80808F' }}>Today</span>
              <h5 className='widget-box-h5' style={{ color: '#464E5F', marginBottom: 0 }}>₹650</h5>
            </div>
            <div>
              <span className='widget-box-span' style={{ color: '#80808F' }}>Today</span>
              <h5 className='widget-box-h5' style={{ color: '#464E5F', marginBottom: 0 }}>₹650</h5>
            </div>
            <div>
              <span className='widget-box-span' style={{ color: '#80808F' }}>Today</span>
              <h5 className='widget-box-h5' style={{ color: '#464E5F', marginBottom: 0 }}>₹650</h5>
            </div>


          </div>
        </div>

      </div>


    </>
  )
}

export default Widget3