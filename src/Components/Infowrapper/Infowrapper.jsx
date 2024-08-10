import './Infowrapper.css'
import logo from '../../assets/logo.svg'
import arrow from '../../assets/icon-arrow.svg'
import bac from '../../assets/bg-pattern-desktop.svg'
function Infowrapper(){
    return(
<div id='infowrapperdiv'>
    <div id='logodiv'>
    <img id='logoimg' src={logo}/>
    </div>
    <div id='part2div'>
    <label id='we'>WE'RE </label>
    <label className='coming'>COMING </label>
    <label className='coming'>SOON</label>
    <p id='paragraph'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
    </div>
    <div id='inputdiv'>
   <input id='inputfield' type='Email Address' required />
   <button id='minibtn'>
    <img id='arrow' src={arrow}/>
   </button>
   </div>
  
</div>
    )
}

export default Infowrapper