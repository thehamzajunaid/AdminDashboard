import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              Edit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img className='itemImg' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
              <div className="details">
              <h1 className="itemTitle">Hamza Junaid</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">hamza@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+12 343 353 223</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Pakistan</span>
              </div>
            </div>
            
              
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User spending last 6 months"/>
          </div>
        </div>

        <div className="bottom">
          <h1 className="title">Latest Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single