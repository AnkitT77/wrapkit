import style from '/styles/animation.module.css';
import Link from "next/link";


export default function DesktopMenu({passclose}){
   const menu = [
       {
           name:"Phone",
           img:"/category/dc1.png",
           link:"/phone"
       },
       {
           name:"Laptop",
           img:"/category/dc2.png",
           link:"/laptop"
       },
       {
           name:"Charger",
           img:"/category/dc4.png",
           link:"/charger"
       },
       {
           name:"All Products",
           img:"/category/dc5.png",
           link:"/phone"
       }
   ]

    return(
        <div className="bg-white w-full py-10">
            <div className="w-full max-w-6xl mx-auto px-5 grid grid-cols-4 gap-7">
            {menu.map((item,i)=>(
                <Link key={i} href={item.link} passHref>
                    <div onClick={passclose}  className={`bg-zinc-100/80 hover:border hover:border-blue-500 flex justify-between flex-col overflow-hidden cursor-pointer group w-full p-5 rounded ${style.card}`}>
                    <div className="overflow-hidden">
                        <img src={item.img} className="w-full group-hover:scale-[1.05] duration-100 ease-in" />
                    </div>
                    <h6 className="flex font-semibold md:text-xl text-lg justify-between items-center gap-2 w-full">
                        {item.name}
                        <span className={`${style.icon}`}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
                        </span>
                    </h6>
                </div>
                </Link>
            ))}

        </div>
        </div>


    )
}


export  function DesktopTheme({passclose}){
    const menu = [
        {
            name:"Dark",
            img:"/category/tc2.webp",
            link:"/phone"
        },
        {
            name:"Abstract",
            img:"/category/tc4.webp",
            link:"/phone"
        },
        {
            name:"Tropical Flowers",
            img:"/category/tc5.webp",
            link:"/phone"
        },
        {
            name:"Cartoon",
            img:"/category/tc3.webp",
            link:"/phone"
        },
        {
            name:"Bright Colors",
            img:"/category/tc1.webp",
            link:"/phone"
        }
    ]

    return(
        <div className="bg-white w-full py-10">
            <div className="w-full max-w-7xl mx-auto px-5 grid grid-cols-5 gap-7">
                {menu.map((item,i)=>(
                    <Link key={i} href={item.link} passHref>
                    <div onClick={passclose} className={`bg-zinc-50 hover:border hover:border-blue-500 flex justify-between flex-col overflow-hidden cursor-pointer group w-full p-5 rounded ${style.card}`}>
                        <div className="overflow-hidden">
                            <img src={item.img} className="w-full group-hover:scale-[1.05] duration-100 ease-in" />
                        </div>
                        <h6 className="flex mt-2 font-semibold md:text-xl text-lg justify-between items-center gap-2 w-full">
                            {item.name}
                            <span className={`${style.icon}`}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
</svg>
                        </span>
                        </h6>
                    </div>
                    </Link>
                ))}

            </div>
        </div>

    )
}
