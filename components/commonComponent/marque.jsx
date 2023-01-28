export default function Marque() {
  const data = [
    {
      name: "Secure Payment",
      img: "/imgs/payment.svg",
    },
    {
      name: "Ships free and with love",
      img: "/imgs/delivery.svg",
    },
    {
      name: "Secure Payment",
      img: "/imgs/payment.svg",
    },
    {
      name: "Ships free and with love",
      img: "/imgs/delivery.svg",
    },
    {
      name: "Secure Payment",
      img: "/imgs/payment.svg",
    },
    {
      name: "Ships free and with love",
      img: "/imgs/delivery.svg",
    },
    {
      name: "Secure Payment",
      img: "/imgs/payment.svg",
    },
    {
      name: "Ships free and with love",
      img: "/imgs/delivery.svg",
    },
    {
      name: "Secure Payment",
      img: "/imgs/payment.svg",
    },
    {
      name: "Ships free and with love",
      img: "/imgs/delivery.svg",
    },
    {
      name: "Secure Payment",
      img: "/imgs/payment.svg",
    },
    {
      name: "Ships free and with love",
      img: "/imgs/delivery.svg",
    },
  ];
  return (
    <>
      <style jsx>{`
        .scrollingReview {
          animation: scroll 40s linear 0s infinite;
          position: absolute;
          top: 50%;
          left: 0;
          white-space: nowrap;
        }
        @keyframes scroll {
          from {
            transform: translateX(0) translateY(-50%);
          }
          to {
            transform: translateX(-100%) translateY(-50%);
          }
        }
      `}</style>
      <div className="w-full overflow-hidden flex  h-[80px] relative bg-[#CEDCFF]">
        <div className="scrollingReview flex gap-20 w-full">
          {data.map((item, i) => (
            <div key={i} className="flex w-full min-w-max  gap-4 items-center">
              <span>
                <img src={item.img} className="h-[40px]" alt={item.name} />
              </span>
              <h6 className="whitespace-nowrap md:text-xl text-lg">
                {item.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
