import { Link } from "react-router-dom"
import { IoMdHome } from "react-icons/io";

const Nav = () => {
    return (
        <div className="bg-sky-800 text-white py-4">
            <ul className="flex gap-x-4 justify-center items-center">
                <li>
                    <Link to="/" className="hover:text-gray-300 text-2xl">
                        <IoMdHome />
                    </Link>
                </li>
                <li>
                    <Link to="/ceasercipher" className="hover:text-gray-300">
                        Caesar Cipher
                    </Link>
                </li>
                <li>
                    <Link to="/affinecipher" className="hover:text-gray-300">
                        Affine Cipher
                    </Link>
                </li>
                <li>
                    <Link to="/vigenerecipher" className="hover:text-gray-300">
                        Vigenere Cipher
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav