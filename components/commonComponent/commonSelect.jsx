const data = [
        "Apple","Asus","Enter your Device details","Google","Honor","Huawei","LG","MOTOROLA","Nothing","OnePlus"
        ,"Oppo","Poco","Realme","Samsung","Vivo","Xiaomi","iQOO"
]





export default function  CommonSelect(){
    return(
        <select className=" h-[55px] cursor-pointer pl-3 outline-none focus:ring-2 focus:ring-blue-200 md:text-lg focus:border-blue-500 rounded-md border border-zinc-300">
                {data.map((item,i)=>(
                    <option value={item} key={i}>
                            {item}
                    </option>
                ))}
        </select>
    )
}