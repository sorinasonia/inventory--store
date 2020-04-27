import React from "react"
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn , FaSlack} from "react-icons/fa";

class Footer extends React.Component {

    constructor(props){
        super(props)
    }
    


    location() {
        return <div className="location">
            <h1>LOCATION</h1>
            <p>1562, Sanusi Fafunwa,</p>
            <p> Victoria Island, Lagos.</p>
            <p>Some Where In Nigeria.</p>
        </div>
    }


    social(){
        return <div className="social">
            <h1>AROUND THE WEB</h1>
            <div className="icons">
                <p className="face"> <FaFacebookF/> </p>
                <p className="google"> <FaGooglePlusG/></p>
                <p className="twit"><FaTwitter/></p>
                <p className="linked"> <FaLinkedinIn/></p>
                <p className="slack"> <FaSlack/></p>
                
               
            </div>
        </div>
    }

    about(){
        return<div className="about">
            <h1>ABOUT US</h1>
            <p>SorinaSonia inventory store allows user to manage
            products, while providing comprehensive
            chart workflow for management without excluding
            the pictures of product for comfirmation.</p>
        </div>
    }

    buttom() {
        return<div className="buttom">
            <h2>Copyright&copy; Inventory2020 </h2>
        </div>
    }
    
    render(){
        return(
            <div className="footer">
                <div className="all">
                    <this.location/>
                    <this.social/>
                    <this.about/>

                </div>
                <this.buttom/>
            </div>
        )
    };
}



export default Footer;