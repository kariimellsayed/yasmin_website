import Image from "next/image";
import Link from "next/link";
import ResultCart from "../components/ResultCart.jsx"

type Product = {
  id: number;
  title: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

type CartProps = {
    Products: Product[]
}

const cartProducts: Product[] = [
  {
    id: 1,
    title: "Lip gloss",
    size: "Large",
    color: "white",
    price: 320.00,
    quantity: 1,
  },
    {
    id: 2,
    title: "Lip gloss",
    size: "Medium",
    color: "Red",
    price: 320.00,
    quantity: 1,
  },
  {
    id: 3,
    title: "Lip gloss",
    size: "Large",
    color: "Blue",
    price: 320.00,
    quantity: 1,
  },

]


export default function Cart() {
    return (
      <section className="py-16">
        <div className="custom__container">
          <div className='flex items-center gap-2 mb-8 text-[#393939] lg:text-lg mr-auto md:pl-9 text-sm'>
           <Link  href={"/"} className='text-[#868686]'>Home</Link>
           <Image
           src={"/arrow-right.svg"}
           alt="Arrow Right"
           width={24}
           height={24}
           />
             <div className='font-semibold'>Cart</div>
           </div>
        <ResultCart cartProducts={cartProducts}/>
        </div>
      </section>
    )
}