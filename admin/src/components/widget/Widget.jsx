import './widget.scss'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


function Widget({type}) {

  let data;
  //temporary

  const amount = 100
  const diff = 20

  switch(type){
    case "user":
      data={
        title: "USERS",
        isMoney:false,
        link: "See all users",
        icon: <Person2OutlinedIcon/>
      };
      break
    case "order":
      data={
        title: "ORDERS",
        isMoney:false,
        link: "View net earnings",
        icon: <ShoppingCartOutlinedIcon/>
      };
      break
    case "earning":
      data={
        title: "EARNINGS",
        isMoney:false,
        link: "See all users",
        icon: <MonetizationOnOutlinedIcon/>
      };
      break
    case "balance":
    data={
      title: "BALANCE",
      isMoney:false,
      link: "See details",
      icon: <AccountBalanceWalletOutlinedIcon/>
    };
    break
    default:
      break
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpOutlinedIcon/>
                {diff}%
            </div>
            <Person2OutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget