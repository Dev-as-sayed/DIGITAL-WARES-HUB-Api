import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/HG4kysW/image.png)'}}>
            <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[36rem]">
                        <h1 className="mb-5 text-[30px] font-bold">Unleash the Power of Electronics with Us</h1>
                        <p className="mb-5 text-base">Discover the latest trends, products, and breakthroughs in the world of technology and electronics.</p>
                        <Link to='/regiter'><button className="btn btn-primary">Get Started</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;