export function GridLayout() {
  return (
    <div className="flex flex-col px-5 gap-20 bg-white md:py-20 py-14">
      <div className="flex flex-col px-5 w-full  gap-6 text-center">
        {/*<h3 className="text-zinc-800 md:text-4xl font-semibold text-4xl">*/}
        {/*    Our Features*/}
        {/*</h3>*/}
        {/*<Paragraph extra={'max-w-3xl mx-auto'}>*/}
        {/*    Lorem Ipsum is simply dummy text of the printing and typesetting*/}
        {/*    industry. Lorem Ipsum has been the industry's standard dummy text ever*/}
        {/*    since the 1500s.*/}
        {/*</Paragraph>*/}
      </div>
      <div className="grid w-full md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-10">
        <div
          className={
            "md:p-14 md:h-auto h-[350px] p-10 col-span-1 overflow-hidden  bg-gradient-to-r from-blue-100 to-zinc-100 flex  flex-col md:gap-10 items-center rounded-[15px]"
          }
        >
          <div className="flex flex-col max-w-md mr-auto w-full gap-4">
            <Paragraph2
              text="Our Wraps Are Made Of <span class='text-blue-600'>High-Quality Vinyl</span>, Which Makes Them Flexible And Long-Lasting"
              style="text-zinc-800"
            ></Paragraph2>
          </div>
          <div className="rounded-[15px]  relative h-full w-full">
            <div className="absolute h-[500px] left-1/2 -translate-x-1/2   w-[500px] md:top-[100px] top-[20px] md:right-[-150px] md:h-[450px] md:w-[450px]">
              <img
                src="/category/dc1.png"
                className="w-full scale-[1.1] md:scale-[1.6] h-full"
                alt="Quality"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-10">
          <div
            className={
              "h-[320px] p-10 col-span-1 overflow-hidden  bg-gradient-to-br from-[#ECE5F7] to-zinc-100 flex  flex-col md:gap-10 items-center rounded-[15px] w-full"
            }
          >
            <div className="flex flex-col max-w-md mr-auto  w-full gap-4">
              <Paragraph2
                text=" Our High Performance Skins Are Not Only Great To <span class='text-purple-600'>Prevent Nicks And Scratches</span>, But Also Hide Any Old Ones"
                style="text-zinc-800"
              ></Paragraph2>
            </div>
            <div className="rounded-[15px]  relative h-full w-full">
              <div className="absolute h-[500px] left-1/2 -translate-x-1/2   w-[500px] md:top-[-40px] top-[20px] md:right-[-150px] md:h-[450px] md:w-[450px]">
                <img
                  src="/category/dc1.png"
                  className="w-full scale-[1.1] h-full"
                  alt="Quality"
                />
              </div>
            </div>
          </div>
          <div
            className={
              "h-[320px] p-10 col-span-1 overflow-hidden  bg-gradient-to-br from-[#F5EEEA] to-[#FCFBFA] flex  flex-col md:gap-10 items-center rounded-[15px] w-full"
            }
          >
            <div className="flex flex-col max-w-md mr-auto w-full gap-4">
              <Paragraph2
                text="We Have A Variety Of <span class='text-[#bd3c32]'>Classic Designs</span> And <span class='text-[#bd3c32]'>Materials</span> To Choose From"
                style="text-zinc-800"
              ></Paragraph2>
            </div>
            <div className="rounded-[15px]  relative h-full w-full">
              <div className="absolute left-1/2 -translate-x-1/2   md:top-[-20px]  h-[300px] w-[300px]">
                <img
                  src="/category/dc5.png"
                  className="w-full scale-[1.3] md:scale-[1.5] h-full"
                  alt="Quality"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Paragraph2(props) {
  const extra = props.extra || "";
  return (
    <p
      dangerouslySetInnerHTML={{ __html: props.text }}
      style={props.height}
      className={`${extra} text-xl sm:text-[20px] font-semibold ${
        props.style ? props.style : "text-zinc-800"
      } leading-[1.5]`}
    ></p>
  );
}
