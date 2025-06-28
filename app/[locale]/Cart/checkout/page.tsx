import Image from "next/image";
import Link from "next/link";
import CheckoutForms from "../../components/CheckoutForms"




export default function Checkout(params: []) {
    return (
        <section>
        <div className="custom__container">
        <div className='flex items-center gap-2 mb-8 text-[#393939] lg:text-lg mr-auto text-sm'>
         <Link  href={"/"} className='text-[#868686]'>Home</Link>
         <Image
         src={"/arrow-right.svg"}
         alt="Arrow Right"
         width={24}
         height={24}
         />
           <div className='font-semibold'>Checkout</div>
         </div>
         <h3 className="text-[#393939] font-semibold text-3xl mb-3.5 pb-3.5">Checkout</h3>
         <CheckoutForms />
        </div>
        </section>
    )
}