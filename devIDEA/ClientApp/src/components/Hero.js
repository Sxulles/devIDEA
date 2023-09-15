import vsLogo from "../assets/img/vs_logo.png"
import jsLogo from "../assets/img/js_logo.png"
import dotnetLogo from "../assets/img/dotnet_logo.png"
import csharplogo from "../assets/img/csharp_logo.png"
import cssLogo from "../assets/img/css_logo.png"
import sqlLogo from "../assets/img/sql_logo.png"
import htmlLogo from "../assets/img/html_logo.png"
export const Hero = () => {
    return (
        <div className="hero">
                <div className="container-fluid pt-5 pb-5">

                    <div className="mb-5 mb-lg-2 mx-auto text-center max-w-55 py-4 mt-3">
                        <div className="mb-5 mt-5">
                            <div className="mb-4">
                                <h2 className="fs-1 text-light display-1 text-shadow-sm">
                                    <span className="text-shadow-sm">Develop your </span>
                                    <span className="text-purple-gradient fw-bold">IDEA</span>
                                    <span className="text-shadow-sm"> through us!</span></h2>
                            </div>
                            
                            
                            <p className="lead text-white mb-0">
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

            <div className="container-fluid mt-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 col-lg-2 p-3"><img className="img-fluid d-block mx-auto h-custom" src={vsLogo}/></div>
                    <div className="col-12 col-md-6 col-lg-2 p-3"><img className="img-fluid d-block mx-auto h-custom" src={jsLogo}/></div>
                    <div className="col-12 col-md-6 col-lg-2 p-3"><img className="img-fluid d-block mx-auto h-custom" src={dotnetLogo}/></div>
                    <div className="col-12 col-md-6 col-lg-2 p-3"><img className="img-fluid d-block mx-auto h-custom" src={csharplogo}/></div>
                    <div className="col-12 col-md-6 col-lg-2 p-3"><img className="img-fluid d-block mx-auto h-custom" src={cssLogo}/></div>
                    <div className="col-12 col-md-6 col-lg-2 p-3"><img className="img-fluid d-block mx-auto h-custom" src={sqlLogo}/></div>
                </div>
            </div>
        </div>
    );
}