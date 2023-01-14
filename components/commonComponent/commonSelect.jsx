

export default function  CommonSelect({val,data,passSelect,children}){

    const handleSelect = (e)=>{
        passSelect(e.target.value)
    }

    return(
        <select value={val} onChange={handleSelect} className=" h-[50px]  bg-white cursor-pointer pl-3 outline-none focus:ring-2 focus:ring-blue-200 md:text-lg focus:border-blue-500 rounded-md border border-zinc-300">
            {children}
            {data.map((item,i)=>(
                    <option value={item} key={i}>
                            {item}
                    </option>
                ))}
        </select>
    )
}


