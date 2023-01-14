export function Paragraph({ extra,size, height, children }) {
  const extratext = extra || "";
  const textsize = size || "text-lg md:text-[19px]"
  return (
    <p
      style={{ lineHeight: 1.6 }}
      className={`${extratext}  ${textsize} text-zinc-700 `}
    >
      {children}
    </p>
  );
}

export function Heading({ style, height, children, size }) {
  const lineHeight = height || "leading-[1.2]";
  const size1 = size || "md:text-6xl text-5xl";
  return (
    <h2
      style={{ lineHeight: 1.2 }}
      className={`${style} ${lineHeight} ${size1} font-bold `}
    >
      {children}
    </h2>
  );
}
