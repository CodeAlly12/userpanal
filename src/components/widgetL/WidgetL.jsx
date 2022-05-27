import React from 'react'
import "./widgetL.css";

export default function WidgetL() {
  const Button =({type}) =>{
    return <button className={'WidgetLButton ' + type}>{type}</button>
  }
  return (
    <div className="WidgetL">
      <h3 className='WidgetLTitle'>
        Weekly Transactions
      </h3>
      <table className='WidgetLTable' >
        <tr className='WidgetLTr'>
          <th className='WidgetLTh'>Customer</th>
          <th className='WidgetLTh'>Date</th>
          <th className='WidgetLTh'>Amount</th>
          <th className='WidgetLTh'>Status</th>
        </tr>
        <tr className='WidgetLtr'>
          <td className='WidgetLUser'>
            <img src="images/user6.jpeg" alt='' className='WidgetLImg' />
            <span className='WidgetLName'>Martha Bolt</span>
          </td>
          <td className='WidgetLDate'>22 May 2022</td>
          <td className='WidgetLAmount'>$400</td>
          <td className='WidgetLStatus'>
            <Button type = 'Approved'></Button>
          </td>
        </tr>
        <tr className='WidgetLtr'>
          <td className='WidgetLUser'>
            <img src="images/user7.jpeg" alt='' className='WidgetLImg' />
            <span className='WidgetLName'>Beth Mark</span>
          </td>
          <td className='WidgetLDate'>1 june 2022</td>
          <td className='WidgetLAmount'>$400</td>
          <td className='WidgetLStatus'>
            <Button type = 'Declined'></Button>
          </td>
        </tr>
        <tr className='WidgetLtr'>
          <td className='WidgetLUser'>
            <img src="images/user8.jpeg" alt='' className='WidgetLImg' />
            <span className='WidgetLName'>May Queen</span>
          </td>
          <td className='WidgetLDate'>10 jun 2022</td>
          <td className='WidgetLAmount'>$424</td>
          <td className='WidgetLStatus'>
            <Button type = 'Approved'></Button>
          </td>
        </tr>
        <tr className='WidgetLtr'>
          <td className='WidgetLUser'>
            <img src="images/user9.jpeg" alt='' className='WidgetLImg' />
            <span className='WidgetLName'>Sandra Bullock</span>
          </td>
          <td className='WidgetLDate'>12 jun 2022</td>
          <td className='WidgetLAmount'>$300</td>
          <td className='WidgetLStatus'>
            <Button type = 'Declined'></Button>
          </td>
        </tr>
        <tr className='WidgetLtr'>
          <td className='WidgetLUser'>
            <img src="images/user10.jpeg" alt='' className='WidgetLImg' />
            <span className='WidgetLName'>Jeanie Carl</span>
          </td>
          <td className='WidgetLDate'>13 jun 2022</td>
          <td className='WidgetLAmount'>$123</td>
          <td className='WidgetLStatus'>
            <Button type = 'Pending'></Button>
          </td>
        </tr>
        <tr className='WidgetLtr'>
          <td className='WidgetLUser'>
            <img src="images/user2.jpeg" alt='' className='WidgetLImg' />
            <span className='WidgetLName'>James Kevin</span>
          </td>
          <td className='WidgetLDate'>14 jun 2022</td>
          <td className='WidgetLAmount'>$300</td>
          <td className='WidgetLStatus'>
            <Button type = 'Pending'></Button>
          </td>
        </tr>
      </table>
    </div>
  )
}
