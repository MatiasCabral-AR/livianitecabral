import { Row } from "react-bootstrap"
import './Loader.css'

const Loader = () =>{
    return(
        <Row lg={12} className='d-flex justify-content-center align-items-center loader-row'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Row>
    )
}

export default Loader