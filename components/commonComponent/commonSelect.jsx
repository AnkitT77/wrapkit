export default function CommonSelect({ val, data, passSelect, children }) {
  const handleSelect = (e) => {
    passSelect(e.target.value);
  };

  return (
    <select
      value={val}
      onChange={handleSelect}
      className=" h-[50px]  bg-white cursor-pointer pl-3 outline-none focus:ring-4 focus:ring-blue-200 md:text-lg shadow-md shadow-zinc-200/30 rounded-[10px]"
    >
      {children}
      {data.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  );
}
