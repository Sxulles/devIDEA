import vsLogo from "../assets/img/vs_logo.png"
import jsLogo from "../assets/img/js_logo.png"
import dotnetLogo from "../assets/img/dotnet_logo.png"
import csharplogo from "../assets/img/csharp_logo.png"
import cssLogo from "../assets/img/css_logo.png"
import sqlLogo from "../assets/img/sql_logo.png"
import htmlLogo from "../assets/img/html_logo.png"
export const Hero = () => {
    return (
        <div className="bg-purple-gradient">
                <div className="container-fluid pt-5 mt-5 pb-5">

                    <div className="mb-5 mb-lg-2 mx-auto text-center bg-gradient-custom">
                        <div className="mb-5">
                            <div className="mb-3">
                                <h2 className="mb-3 fs-1 text-light display-1">Develop your <span className="text-purpleblue fw-bold">IDEA</span> through us!</h2>
                            </div>
                            
                            
                            <p className="lead text-white-transparent mb-0">
                                devIDEA hands you a direct and easy way to assemble your idea, to a viable product frame,
                                which with you can start the development proccess literally.
                            </p>
                        </div>
                        <div className="mb-5">
                            <button className="btn cti mb-5">
                                <div className="CTI">
                                    Get started!
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            
                <div className="container-fluid mt-5 bg-dark-transparent">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col"><img className="img-fluid h-25 p-5" src={vsLogo}/></div>
                            <div className="col"><img className="img-fluid h-25 p-5" src={jsLogo}/></div>
                            <div className="col"><img className="img-fluid h-25 p-5" src={dotnetLogo}/></div>
                            <div className="col"><img className="img-fluid h-25 p-5" src={csharplogo}/></div>
                            <div className="col"><img className="img-fluid h-25 p-5" src={cssLogo}/></div>
                            <div className="col"><img className="img-fluid h-25 p-5" src={sqlLogo}/></div>
                            <div className="col"><img className="img-fluid h-25 p-5" src={htmlLogo}/></div>
                        </div>
                    </div>
                </div>
        </div>
    );
}