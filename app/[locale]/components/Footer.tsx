import Link from "next/link";
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default  function Footer() {
    return (
        <footer className="bg-[#FE93B9] py-16">
            <div className="custom__container">
                <div className="flex items-end  justify-between max-[992px]:flex-col max-[992px]:items-center gap-4 pb-7 border-b-2 border-white">
                    <div className="w-[47%] mb-20 max-[992px]:w-full">
                        <Image 
                        src="/logo.svg"
                        alt="logo" 
                        loading="lazy"
                        className="mb-4 max-[992px]:m-auto"
                        width={220}
                        height={220}
                        />

                        <p className="text-[#393939] max-[992px]:text-center">
                            Lorem ipsum dolor sit amet consectetur. Nam cras ut sit arcu varius dictumst id. Amet pulvinar ac mauris tortor commodo eget. Bibendum at ornare vitae sit sed. Faucibus consequat est a nec sed sit venenatis. Ut amet nisi in bibendum faucibus tincidunt dolor leo aenean. Ornare facilisi vitae consectetur molestie nunc egestas non ut.
                        </p>
                    </div>
                    <div className="w-[47%] grid grid-cols-3 gap-6 max-[992px]:grid-cols-1 max-[992px]:w-full" >
                        <div  className="max-[992px]:text-center">
                        <h3 className="relative custom__border text-[#393939] font-bold mb-5 pl-2.5 max-[992px]:w-fit max-[992px]:mx-auto">Shop</h3>
                        <ul>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Eye</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Face</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Body</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Lips</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Perfume</Link></li>
                        </ul>
                    </div>
                    <div className="max-[992px]:text-center">
                        <h3 className="relative custom__border text-[#393939] font-bold mb-5 pl-2.5 max-[992px]:w-fit max-[992px]:mx-auto">Customer Service</h3>
                        <ul>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>About</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Contact</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Privacy Policy</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Refund Policy</Link></li>
                            <li><Link  className="text-[#393939] block pb-2.5" href={""}>Shipping Policy</Link></li>
                        </ul>
                    </div>
                    <div className="max-[992px]:text-center">
                        <h3 className="relative custom__border text-[#393939] font-bold mb-5 pl-2.5 max-[992px]:w-fit max-[992px]:mx-auto">Follow us</h3>
                        <ul>
                            <li><Link className="text-[#393939] block pb-2.5"  href={""}>View the latest makeup trends and tips!</Link></li>
                            <ul className="flex items-center gap-3 max-[992px]:w-fit max-[992px]:m-auto">
                               <li className="w-7 h-7 cursor-pointer  rounded-full bg-white flex justify-center items-center"><FaFacebookF /></li> 
                               <li className="w-7 h-7 cursor-pointer  rounded-full bg-white flex justify-center items-center"><FaInstagram /></li> 
                            </ul>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-4 text-[#393939]"><p>&copy; Yasmin Magdy 2025 | All Rights Reserved.</p> <a href="#">Privacy Policy</a></div>
            </div> 
        </footer>
    )
}