import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer items-center justify-center p-4 bg-neutral text-neutral-content flex">
            <aside className="items-center w-1/2 text-center">
                <Link to="/" className="text-2xl font-bold text-yellow-500">DIGITAL WARES HUB</Link>
                <p>Copyright © 2023 - All rights reserved</p>
            </aside> 
            <nav className="grid-flow-col gap-4 flex-2 border-spacing-2 md:place-self-center md:justify-self-end">
                <Link className='text-3xl'><FaFacebook></FaFacebook></Link>
                <Link className='text-3xl'><FaLinkedin></FaLinkedin></Link>
                <Link className='text-3xl'><FaGithub></FaGithub></Link>
            </nav>
        </footer>

    );
};

export default Footer;