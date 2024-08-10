import './Imgwrapper.css'
import girlimg from '../../assets/hero-desktop.jpg'
function Imgwrapper(){
    return(
<div id='imgdiv'>
    <img id='girl' src={girlimg} />
    
</div>
    )
}

export default Imgwrapper