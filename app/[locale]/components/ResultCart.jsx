"use client"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useMemo, useState } from "react"




export default function ResultCart({cartProducts}) {
    const [carts, setCarts] = useState([]);
    const init = useMemo(() => {
        if (Array.isArray(cartProducts)){
          return cartProducts.map((item) => ({
            ...item,
            quantity: item.quantity ?? 1
        }))}
      return [];
    }, [])

    useEffect(() => {
        setCarts(init)
    }, [])

    // subTotal
    const subTotal = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // discount
    const  discount = subTotal * 0.2;

    // delivery
    const deliveryFee = 60;
    
    const total = subTotal - discount + deliveryFee;

    return (
        <div className="flex items-center gap-14 flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full border-[#0000001A] border-[1px] rounded-2xl p-3.5">{carts.map((ele, index) => (
              <div className="flex items-start relative gap-3 mb-5 pb-5 border-b-[#0000001A] border-b-[1px] last:border-b-0" key={`${ele.id}-${index}`}>
                <span className="absolute top-3.5 right-3.5 cursor-pointer">
                  <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="24"
                   height="24"
                   viewBox="0 0 24 24"
                   fill="none"
                 >
                   <path
                     d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM10.5 15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75V15.75ZM15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V15.75ZM15 4.5H9V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5Z"
                     fill="#FF3B30"
                   />
                 </svg>
            </span>
                <Image
                src={"/images/product_1.png"}
                alt=""
                width={85}
                height={85}
                className="rounded-lg max-w-full"
                loading={"lazy"}                
                />
                <div className="flex-1">
                <h3>{ele.title}</h3>
                <p className="text-[#00000099]"><span className="text-[#393939]">Size:</span> {ele.size}</p>
                <p className="text-[#00000099]"><span className="text-[#393939]">Color:</span> {ele.color}</p>
                <div className="flex justify-between items-center">
                  <p className="text-[#393939] font-normal text-2xl">{ele.price} EGP</p>
                  <div className="bg-[#E3E3E3] w-28 h-10 rounded-[48px] p-5 flex items-center justify-between text-[22px]">
                      <button className="cursor-pointer"
                      onClick={() => {
                        setCarts((prev) => prev.map((item) => item.id === ele.id ? {...item, quantity: Math.max(1, item.quantity - 1)} : item))
                      }}
                      >
                              <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="14"
                       height="2"
                       viewBox="0 0 14 2"
                       fill="none"
                     >
                       <path
                         d="M1 1H13"
                         stroke="#9A3E63"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                    </button>
                      <span>{ele.quantity}</span>
                  <button className="cursor-pointer"
                        onClick={() => {
                        setCarts((prev) => prev.map((item) => item.id === ele.id ? {...item, quantity: item.quantity + 1} : item))
                      }}
                  >
                    <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       viewBox="0 0 16 16"
                       fill="none"
                     >
                       <path
                         d="M8 1V15M1 8H15"
                         stroke="#9A3E63"
                         strokeWidth="2"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                       />
                     </svg>
                   </button>
                  </div>
                </div>
                </div>
              </div>
           ))}</div>

           <div className="lg:w-1/2 w-full border-[#0000001A] border-[1px] rounded-2xl p-3.5">
            <h3 className="text-[#393939] text-2xl mb-2.5">Order Summary</h3>
            <ul>
              <li className="flex items-center justify-between mb-2 pb-2 text-lg text-[#00000099]"><h4>Subtotal</h4> <span className="text-[#393939]">
                {subTotal}
                </span></li>
              <li className="flex items-center justify-between mb-2 pb-2 text-lg text-[#00000099]"><h4>Discount (-20%)</h4> <span className="text-[#FF3333]">{discount} EGP</span></li>
              <li className="flex items-center justify-between mb-2 pb-2 text-lg text-[#00000099]"><h4>Delivery Fee</h4> <span className="text-[#393939]">{deliveryFee} EGP</span></li>
            </ul>
            <div className="flex items-center justify-between text-[#393939]"><h4 className="text-lg">Total</h4> <span className="text-2xl">{total} EGP</span></div>
            <div className="flex items-center justify-between my-5">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M21.0766 10.4856L11.7653 1.17438C11.5917 0.999635 11.3851 0.861091 11.1576 0.766785C10.93 0.67248 10.686 0.624289 10.4397 0.625008H1.75001C1.45164 0.625008 1.16549 0.743534 0.954513 0.954513C0.743534 1.16549 0.625008 1.45164 0.625008 1.75001V10.4397C0.624289 10.686 0.67248 10.93 0.766785 11.1576C0.861091 11.3851 0.999635 11.5917 1.17438 11.7653L10.4856 21.0766C10.8372 21.4281 11.3141 21.6255 11.8113 21.6255C12.3084 21.6255 12.7853 21.4281 13.1369 21.0766L21.0766 13.1369C21.4281 12.7853 21.6255 12.3084 21.6255 11.8113C21.6255 11.3141 21.4281 10.8372 21.0766 10.4856ZM11.8113 19.2203L2.87501 10.2813V2.87501H10.2813L19.2175 11.8113L11.8113 19.2203ZM7.37501 5.87501C7.37501 6.17168 7.28703 6.46169 7.12221 6.70836C6.95739 6.95504 6.72312 7.1473 6.44903 7.26083C6.17494 7.37436 5.87334 7.40406 5.58237 7.34619C5.2914 7.28831 5.02413 7.14545 4.81435 6.93567C4.60457 6.72589 4.46171 6.45861 4.40383 6.16764C4.34595 5.87667 4.37566 5.57507 4.48919 5.30098C4.60272 5.02689 4.79498 4.79263 5.04165 4.6278C5.28833 4.46298 5.57834 4.37501 5.87501 4.37501C6.27283 4.37501 6.65436 4.53304 6.93567 4.81435C7.21697 5.09565 7.37501 5.47718 7.37501 5.87501Z"
                    fill="black"
                    fillOpacity="0.4"
                  />
                </svg>
                </span>
                <input className="bg-[#E6E6E6] placeholder:text-[#00000066] outline-none p-2 rounded-4xl pl-12" type="text" name="discount" placeholder="Add promo code"/>
              </div>
              <button className="cursor-pointer bg-[#FE93B9] rounded-4xl p-4 h-12 w-28 flex justify-center items-center"> Apply </button>
            </div>
            <Link href={"cart/checkout"}>
                        <button className="cursor-pointer bg-[#FE93B9] rounded-4xl p-4 h-16 w-full flex justify-center items-center gap-3.5">Go to Checkout  
              <svg
               xmlns="http://www.w3.org/2000/svg"
               width="20"
               height="16"
               viewBox="0 0 20 16"
               fill="none"
             >
               <path
                 d="M12.2959 0.453127L19.0459 7.20313C19.1508 7.30764 19.234 7.43183 19.2908 7.56858C19.3476 7.70533 19.3768 7.85194 19.3768 8C19.3768 8.14807 19.3476 8.29468 19.2908 8.43142C19.234 8.56817 19.1508 8.69236 19.0459 8.79688L12.2959 15.5469C12.0846 15.7582 11.7979 15.877 11.4991 15.877C11.2002 15.877 10.9135 15.7582 10.7022 15.5469C10.4908 15.3355 10.3721 15.0489 10.3721 14.75C10.3721 14.4511 10.4908 14.1645 10.7022 13.9531L15.5313 9.12406H1.75C1.45163 9.12406 1.16548 9.00554 0.954505 8.79456C0.743527 8.58358 0.625 8.29743 0.625 7.99906C0.625 7.7007 0.743527 7.41455 0.954505 7.20357C1.16548 6.99259 1.45163 6.87406 1.75 6.87406H15.5313L10.7013 2.045C10.4899 1.83366 10.3712 1.54701 10.3712 1.24813C10.3712 0.949242 10.4899 0.662598 10.7013 0.451253C10.9126 0.239908 11.1992 0.121174 11.4981 0.121174C11.797 0.121174 12.0837 0.239908 12.295 0.451253L12.2959 0.453127Z"
                 fill="#393939"
               />
             </svg>
            </button>
            </Link>
           </div>
        </div>
    )
}