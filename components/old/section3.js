import React from "react";
import Image from "next/image";

export default function Sectionthird() {
  return (
    <div className="py-14 bg-[#E0E9FF] md:py-20">
      <div className="w-full flex flex-col flex-grow items-center text-center justify-center my-6">
        <div className="flex flex-col text-center justify-center items-center">
          <h2 className="md:text-4xl text-3xl w-full flex-grow  font-bold text-zinc-800 tracking-wider md:text-3xl ">
            WHY TO CHOOSE WRAPKIT
          </h2>
          <div className="flex flex-row-1 text-center justify-center items-center mt-3">
            <div className="w-[100px] h-px  bg-indigo-500 center  mr-[20px]" />
            <Image src="/img/wrapicon.png" width={30} height={30} />

            <div className="w-[100px] h-px  bg-indigo-500 ml-[20px] " />
          </div>
        </div>
      </div>
      <div className="capitalize flex flex-col w-4/5  items-center mt-3 mx-auto text-center">
        <p className="leading-7 md:text-xl text-zinc-800">
          Let us emphasize on some facts to gain your confidence if you are not
          already our customer
        </p>
      </div>
      <div className="h-full hover:text-white">
        <div className=" md:p-9 p-6  max-w-7xl mx-auto mt-10 mx-auto font-heading   grid grid-cols-1 gap-7     sm:grid-cols-2  lg:grid-cols-4 ">
          <div className="w-full bg-white group lg:md:p-9 p-6 hover:fill-white  items-center justify-center rounded-lg  hover:bg-[#7262CC] shadow-xl	transition duration-150 ease-out hover:ease-in p-8 hover:shadow-xl text-left">
            <div className="flex flex-col   ">
              <div className=" items-left justify-center  ">
                <svg
                  version="1.1"
                  className=" w-14 h-10  "
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 105.16"
                  style={{ enableBackground: "new 0 0 122.88 105.16" }}
                >
                  <g>
                    <path d="M66.41,88.93h21.91c1.76-1.75,3.69-3.57,5.65-5.42c4.11-3.89,8.4-7.95,12.81-13.03c5.04-5.81,5.58-7.82,7.11-13.51 c0.29-1.07,0.61-2.27,1.03-3.76l2.62-9.21l0.03-0.1c1.4-4.1,1.51-6.81,0.93-8.37c-0.18-0.48-0.41-0.8-0.68-0.97 c-0.21-0.14-0.49-0.19-0.78-0.16c-0.68,0.07-1.45,0.5-2.15,1.27l-7.78,18.53c-0.07,0.17-0.17,0.33-0.28,0.47 c-0.46,0.83-1.08,1.64-1.88,2.41l-13.8,15.39c-0.75,0.84-2.04,0.91-2.87,0.16c-0.84-0.75-0.91-2.04-0.16-2.87l13.81-15.39 c0.06-0.07,0.12-0.14,0.19-0.2c1.43-1.36,1.88-2.83,1.63-3.9c-0.08-0.33-0.22-0.61-0.42-0.8c-0.19-0.17-0.44-0.29-0.75-0.32v0 c-1.23-0.13-3.04,0.78-5.25,3.39l0,0c-0.06,0.07-0.13,0.14-0.2,0.21l-5.35,4.72l-0.03,0.03c-5.79,5.48-8.28,6.78-12.82,9.15 c-0.95,0.5-1.99,1.04-3.28,1.74c-0.51,0.28-1.01,0.62-1.5,0.99c-0.52,0.4-1.02,0.81-1.49,1.21c-2.4,2.02-3.66,3.66-4.38,5.47 c-0.75,1.88-1.02,4.17-1.39,7.31c-0.15,1.27-0.26,2.52-0.35,3.77C66.47,87.74,66.44,88.34,66.41,88.93L66.41,88.93z M51.47,42.28 c-2.18,2.9-4.05,5.32-5.06,8.09c-0.99,2.7-1.39,3.94,0.85,1.13c2.09-2.61,4.05-5.15,6.9-7.55c0.2,0.05,0.42,0.09,0.64,0.14 C80.67,49.23,99.5,37.6,96.19,0C76.28,6.9,48.07,4.09,50.99,39.43C51.1,40.74,51.2,41.64,51.47,42.28L51.47,42.28z M58.41,36.63 c6.5-14,23.2-18.8,31.48-28.37C80.9,25.79,75.99,25.02,58.41,36.63L58.41,36.63L58.41,36.63z M56.47,88.93H34.55 c-1.76-1.75-3.69-3.57-5.65-5.42c-4.11-3.89-8.4-7.95-12.81-13.03c-5.04-5.81-5.58-7.82-7.11-13.51C8.7,55.9,8.38,54.7,7.96,53.21 L5.34,44l-0.03-0.1c-1.4-4.1-1.51-6.81-0.93-8.37c0.18-0.48,0.41-0.8,0.68-0.97c0.21-0.14,0.49-0.19,0.78-0.16 C6.53,34.46,7.3,34.9,8,35.66l7.78,18.53c0.07,0.17,0.17,0.33,0.28,0.47c0.46,0.83,1.08,1.64,1.88,2.41l13.8,15.39 c0.75,0.84,2.04,0.91,2.87,0.16c0.84-0.75,0.91-2.04,0.16-2.87L20.96,54.35c-0.06-0.07-0.12-0.14-0.19-0.2 c-1.43-1.36-1.88-2.83-1.63-3.9c0.08-0.33,0.22-0.61,0.42-0.8c0.19-0.17,0.44-0.29,0.75-0.32v0c1.23-0.13,3.05,0.78,5.25,3.39l0,0 c0.06,0.07,0.13,0.14,0.2,0.21l5.35,4.72l0.03,0.03c5.79,5.48,8.28,6.78,12.82,9.15c0.95,0.5,1.99,1.04,3.28,1.74 c0.51,0.28,1.01,0.62,1.5,0.99c0.52,0.4,1.02,0.81,1.49,1.21c2.4,2.02,3.66,3.66,4.38,5.47c0.75,1.88,1.02,4.17,1.39,7.31 c0.15,1.27,0.26,2.52,0.35,3.77C56.41,87.74,56.44,88.34,56.47,88.93L56.47,88.93z M29.45,89.63c-0.31,0.36-0.5,0.83-0.5,1.34 v12.14c0,1.13,0.92,2.04,2.04,2.04h27.58c1.13,0,2.04-0.92,2.04-2.04V90.86c0-1.3-0.08-2.7-0.17-4c-0.09-1.33-0.21-2.65-0.36-3.96 c-0.4-3.43-0.7-5.94-1.66-8.35c-0.99-2.47-2.58-4.6-5.53-7.09c-0.54-0.46-1.09-0.92-1.67-1.35c-0.61-0.46-1.27-0.9-2.01-1.31 c-1.2-0.65-2.32-1.24-3.34-1.78c-4.2-2.2-6.5-3.4-11.91-8.52c-0.04-0.04-0.09-0.08-0.13-0.11l-5.22-4.61 c-3.19-3.73-6.31-4.97-8.7-4.71l-0.01,0v0c-1.17,0.12-2.17,0.58-2.97,1.28L11.65,33.8l-0.01,0c-0.08-0.18-0.18-0.35-0.31-0.51 c-1.46-1.75-3.31-2.77-5.08-2.95c-1.21-0.12-2.38,0.14-3.4,0.8c-0.97,0.63-1.77,1.61-2.27,2.96c-0.88,2.35-0.86,6,0.86,11.05 l2.6,9.15c0.38,1.32,0.71,2.59,1.02,3.71c1.7,6.35,2.3,8.6,7.97,15.12c4.49,5.17,8.88,9.33,13.1,13.32 C27.23,87.51,28.33,88.55,29.45,89.63L29.45,89.63z M33.35,93.01c0.27,0.06,0.55,0.06,0.83,0h22.34v8.06H33.03v-8.06H33.35 L33.35,93.01z M93.43,89.63c0.31,0.36,0.5,0.83,0.5,1.34v12.14c0,1.13-0.91,2.04-2.04,2.04H64.32c-1.13,0-2.04-0.92-2.04-2.04 V90.86c0-0.07,0-0.15,0.01-0.22c0.03-1.31,0.08-2.58,0.16-3.78c0.09-1.33,0.21-2.65,0.36-3.96c0.4-3.43,0.7-5.94,1.66-8.35 c0.99-2.47,2.58-4.6,5.53-7.09c0.54-0.46,1.09-0.92,1.67-1.35c0.61-0.46,1.27-0.9,2.01-1.31c1.2-0.65,2.32-1.24,3.34-1.78 c4.2-2.2,6.5-3.4,11.91-8.52c0.04-0.04,0.09-0.08,0.13-0.11l5.22-4.61c3.19-3.73,6.31-4.97,8.7-4.71l0.01,0v0 c1.17,0.12,2.17,0.58,2.97,1.28l5.27-12.56l0.01,0c0.08-0.18,0.18-0.35,0.31-0.51c1.46-1.75,3.31-2.77,5.08-2.95 c1.21-0.12,2.38,0.14,3.4,0.8c0.97,0.63,1.77,1.61,2.27,2.96c0.88,2.35,0.86,6-0.86,11.05l-2.6,9.15 c-0.38,1.32-0.71,2.59-1.02,3.71c-1.7,6.35-2.3,8.6-7.97,15.12c-4.49,5.17-8.88,9.33-13.1,13.32 C95.65,87.51,94.55,88.55,93.43,89.63L93.43,89.63z M89.53,93.01c-0.27,0.06-0.55,0.06-0.83,0H66.36v8.06h23.49v-8.06H89.53 L89.53,93.01z" />
                  </g>
                </svg>

                <h2 className="text-xl group-hover:text-white text-left mt-4 font-heading  font-bold tracking-wider">
                  Best Quality
                </h2>
              </div>

              <p className="group-hover:text-white capitalize font-body hover:text-white md:text-base text-sm mt-1">
                Our wraps are made of high-quality vinyl, which makes them
                flexible and long-lasting
              </p>
            </div>
          </div>

          <div className="w-full bg-white group center items-center hover:fill-white justify-center   hover:bg-[#7262CC] hover:text-white rounded-lg  shadow-xl	transition duration-150 ease-out hover:ease-in p-8 lg:md:p-9 p-6 hover:shadow-xl text-left">
            <div className="flex flex-col  ">
              <div className=" hover:fill-white  items-left justify-center  ">
                <svg
                  version="1.1"
                  className=" w-14 h-10  "
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 85.22"
                  style={{ enableBackground: "new 0 0 122.88 85.22" }}
                >
                  <g>
                    <path d="M28.84,12.93l4.75,0.09L23.08,47.67c1.45,0.36,2.82,0.79,4.11,1.28c-1.27-0.48-2.61-0.9-4.03-1.26 C13.94,45.62,6.32,48.64,0,55.82l7.87,3.71l33.43,15.77c0.26-2.05,0.38-3.97,0.34-5.78c0.01,0.26,0.03,0.53,0.03,0.8h38.37 c0.01,8.23,6.69,14.89,14.92,14.89s14.91-6.67,14.92-14.89h22.56c0.87-17.07-7.19-30.2-21.31-31.46h29c1.51,0,2.74-1.24,2.74-2.74 v-3.01c0-1.49-1.22-2.7-2.7-2.7h-0.24V9.79c0-1.35-1.11-2.46-2.46-2.46h-35.4c-1.35,0-2.46,1.11-2.46,2.46V30.4h-17.5 c-1.85-0.06-2.83,0.78-2.84,2.63v5.84h0v3.82c7.88,6.2,9.08,15.89,1.89,21.35H49.5c-0.3-9.29-5.61-14.95-14.43-21.21l5.26-16.21 c2.17-5.04,0.74-8.86-2.43-11.53c0.99-3.18,1.7-5.9,1.48-8.12l5.51,1.14c1.79,0.37,2.25,1.01,2.83-0.72 c0.1-0.3,0.18-0.59,0.23-0.89c0.45-2.37,0.17-2.21-1.75-2.58l-5.88-1.14h-1.75l-2.16-1.21c-1.29-0.74-2.63-1.18-4-1.36l-1.89-0.12 c-1.94,0-4.12-0.54-5.24,1.25c-0.02,0.03-0.03,0.14-0.04,0.3c-0.79,0.27-1.47,0.86-1.98,1.67c-0.63,0.98-1.01,2.32-1.01,3.78 c0,1.46,0.39,2.8,1.01,3.78c0.7,1.1,1.71,1.8,2.87,1.83C26.8,13.18,27.86,12.91,28.84,12.93L28.84,12.93L28.84,12.93z M103.13,24.37h22.46v2.19h-12.46V24.37L103.13,24.37z M93.66,9.48h9v9.78l-4.72-3.66l-4.28,3.66V9.48L93.66,9.48z M103.13,30.07 h22.46v2.19h-12.46V30.07L103.13,30.07z M7.91,59.56l13.3,6.3l-4.32-1.98c-2.97,0.63-5.19,3.27-5.19,6.42 c0,3.63,2.94,6.57,6.57,6.57c3.63,0,6.57-2.94,6.57-6.57c0-1.12-0.28-2.17-0.77-3.1l9.08,4.3c-0.61,7.68-7.04,13.72-14.87,13.72 c-8.24,0-14.92-6.68-14.92-14.92C3.34,66.08,5.09,62.27,7.91,59.56L7.91,59.56L7.91,59.56z M25.27,4.2 c0.06,1.92,0.19,4.39,0.28,6.05c-0.16-0.14-0.32-0.32-0.46-0.55c-0.42-0.65-0.67-1.58-0.67-2.62s0.26-1.97,0.67-2.62 C25.15,4.37,25.21,4.28,25.27,4.2L25.27,4.2z M88.4,70.32h23.14c-0.01,3.62-2.95,6.54-6.57,6.54S88.41,73.94,88.4,70.32L88.4,70.32 L88.4,70.32z" />
                  </g>
                </svg>

                <h2 className="text-xl group-hover:text-white text-left mt-4 font-heading  font-bold tracking-wider">
                  Home Delivery
                </h2>
              </div>

              <p className="group-hover:text-white capitalize font-body hover:text-white md:text-base text-sm mt-1">
                We deliver the skins directly to your place with best safety
                measures and intact
              </p>
            </div>
          </div>

          {/* <div
className="w-full lg:md:p-9 p-6    hover:fill-white rounded-lg center items-center justify-center   hover:bg-[#7262CC] hover:text-white   shadow-xl	transition duration-150 ease-out hover:ease-in p-8 hover:shadow-xl text-left"

>
	<div className="flex flex-col  ">


			<div className=" hover:fill-white  items-left justify-center  ">
			
			<svg version="1.1"  className=" w-14 h-10  " id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.33 122.88" style={{enableBackground:"new 0 0 100.33 122.88" }}>
<g><path class="st0" d="M54.45,122.47c16.11-2.33,30.4-12.87,38.67-26.18c-0.66-0.1-1.32-0.29-1.96-0.56 c-2.06-0.9-3.54-2.58-4.25-4.54c-0.6-1.4-2.7-3.02-4.75-4.61c-5.82-4.5-11.46-8.88-10.23-19.03c0.26-2.11,0.96-4.28,2.01-6.26 L66.33,47.3c-0.44-0.81-0.72-1.66-0.86-2.52c-0.09-0.18-0.18-0.35-0.25-0.53c-2.18,1.21-4.53,2.39-7.17,3.22 c-13.8,4.34-23.2-1.87-12.36-16.12c7.41-9.74-8.94-18.56-23.43-8.72C10.41,30.66,0.18,48.29,0,67.68 C-0.25,95.74,24.34,126.82,54.45,122.47L54.45,122.47z M96.63,86.43c-3.12-8.28-15.78-10.09-14.57-20.07 c0.32-2.64,1.92-5.5,4.25-7.05c0.94-0.62,1.99-1.04,3.12-1.14c0.5-0.04,1.01-0.04,1.54,0.03c6.55,0.84,9.4,7.69,9.36,13.63 C100.29,77.31,98.21,82.78,96.63,86.43L96.63,86.43L96.63,86.43z M88.6,34.92c-5.11,0.43-9.74,1.77-13.85,4.11l-6-32.94 c-0.6-2.61-0.64-4.53,2.28-5.96c1.13-0.24,2.1-0.14,2.89,0.32c0.78,0.45,1.39,1.24,1.82,2.39L88.6,34.92L88.6,34.92L88.6,34.92z M90.59,53.97c-1.93-0.19-5.13,0.39-6.96,2.13L75.7,41.53c4.44-2.52,9.03-4.14,13.89-4.22C89.95,44.28,89.59,46.91,90.59,53.97 L90.59,53.97L90.59,53.97z M15.87,55.39c2.58,3.25,7.31,3.8,10.56,1.21s3.8-7.31,1.21-10.56c-2.58-3.25-7.3-3.8-10.56-1.21 C13.83,47.4,13.29,52.13,15.87,55.39L15.87,55.39L15.87,55.39z M61.67,97.29c2.89,3.64,8.2,4.25,11.85,1.36 c3.66-2.9,4.27-8.21,1.38-11.86C68,78.11,54.77,88.59,61.67,97.29L61.67,97.29L61.67,97.29z M33.58,105.71 c3.53,4.45,10,5.19,14.45,1.66c4.45-3.53,5.19-10,1.66-14.45c-3.53-4.45-10-5.19-14.45-1.66S30.05,101.26,33.58,105.71 L33.58,105.71L33.58,105.71z M13.46,83.23c3.05,3.85,8.66,4.49,12.51,1.44c3.85-3.05,4.5-8.65,1.44-12.51 c-3.05-3.85-8.66-4.49-12.51-1.44C11.05,73.78,10.41,79.38,13.46,83.23L13.46,83.23L13.46,83.23z"/></g></svg>
		

	<h2 className="text-xl  text-left mt-4 font-heading  font-bold tracking-wider">
	Eco Colors 
	</h2>
	</div>

<p className=" capitalize font-body  md:text-base text-sm mt-1">
Colors used on the murti are also non toxic and are not harmful to environment
</p>
</div>
</div> */}

          <div className="w-full bg-white lg:md:p-9 p-6 group rounded-lg  hover:fill-white center items-center justify-center  hover:bg-[#7262CC] hover:text-white  shadow-xl	transition duration-150 ease-out hover:ease-in p-8 hover:shadow-xl text-left">
            <div className="flex flex-col   ">
              <div className="  items-left justify-center hover:fill-white  ">
                <svg
                  version="1.1"
                  className=" hover:fill-white w-14 h-10  "
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 121.24 122.88"
                  style={{ enableBackground: "new 0 0 121.24 122.88" }}
                >
                  <g>
                    <path d="M10.05,96.6C6.38,105.51,1.42,113.97,0,122.88l5.13-0.44c8.1-23.56,15.4-39.4,31.23-59.21 C48.24,48.39,61.13,36.58,77.66,27.2c8.8-5,20.07-10.47,30.21-11.85c2.77-0.38,5.58-0.49,8.46-0.24 c-31.4,7.19-56.26,23.84-76.12,48.8C32.1,74.09,25.05,85.4,18.57,97.32l11.94,2.18l-4.97-2.47l17.78-2.83 c-6.6-2.33-13.12-1.55-15.21-4.06c18.3-0.83,33.34-4.78,43.9-12.45c-3.93-0.55-8.46-1.04-10.82-2.17 c17.69-5.98,27.92-16.73,40.9-26.27c-16.87,3.54-32.48,2.96-37-0.25c29.77,2.21,49-6.02,55.59-26.77c0.57-2.24,0.73-4.5,0.37-6.78 C118.74,0.62,92.49-4.39,83.95,7.77c-1.71,2.43-4.12,4.66-6.11,7.48L85.97,0c-21.88,7.39-23.68,15.54-35,40.09 c0.9-7.47,2.97-14.24,5.66-20.63c-27.34,10.55-36.45,37.11-37.91,59.7c-0.79-7.88,0.67-17.78,3.49-28.9 c-7.98,8-13.41,17.39-11.47,30.79l-3.65-1.63l1.92,7.19l-5.46-2.59L10.05,96.6L10.05,96.6z" />
                  </g>
                </svg>

                <h2 className="text-xl group-hover:text-white text-left mt-4 font-heading  font-bold tracking-wider">
                  Hide Scratches
                </h2>
              </div>

              <p className="group-hover:text-white capitalize font-body hover:text-white md:text-base text-sm mt-1">
                Our high performance skins are not only great to prevent nicks
                and scratches, but also hide any old ones
              </p>
            </div>
          </div>

          <div className="w-full bg-white lg:md:p-9 p-6 group rounded-lg  hover:fill-white center items-center justify-center  hover:bg-[#7262CC] hover:text-white  shadow-xl	transition duration-150 ease-out hover:ease-in p-8 hover:shadow-xl text-left">
            <div className="flex flex-col   ">
              <div className="  items-left justify-center hover:fill-white  ">
                <svg
                  version="1.1"
                  className=" w-14 h-10"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 110.29"
                  style={{ enableBackground: "new 0 0 122.88 110.29" }}
                >
                  <g>
                    <path d="M7.59,71.54l1.6-8.71c1.38-0.13,2.72-0.38,4.04-0.76c1.36-0.39,2.69-0.89,3.99-1.49l5.66,6.86L7.59,71.54 L7.59,71.54L7.59,71.54z M122.88,35.63c-3.17,6.17,2.45,14.47-3.99,19.02c-1.71,1.21-4.2,1.78-6.33,1.24 c-0.86-0.22-1.65-0.61-2.3-1.21c-0.29-0.26-0.55-0.57-0.79-0.91c-2.96-4.25-0.48-9.5,2.99-12.61 C115.66,38.3,119.93,36.63,122.88,35.63L122.88,35.63L122.88,35.63z M96.55,68.44c2.94,2.74,6.15,4.73,9.67,5.88l-6.06,8.64 c2.29,0.64,4.28,1.32,5.74,2.14c2.12,1.18,4.04,2.69,5.58,4.72c3.21,4.24,9.79,19.65-0.88,20.46H5.84 c-10.66-0.81-4.09-16.22-0.88-20.46c1.54-2.04,3.46-3.54,5.58-4.72c0.18-0.1,0.36-0.2,0.55-0.29L8.05,73.43h0l15.36-4.12 l3.01,11.22c6.03-1.41,11.94-3.05,14.95-5.76h0c5.51,16.21,28.53,16.81,33.7,0c3.04,2.74,9.06,4.38,15.15,5.81L96.55,68.44 L96.55,68.44L96.55,68.44z M107.21,56.09c0.92,1.24,2.98,2.82,4.98,2.97l-5.01,13.53c-3.86-1.27-7.28-3.12-9.93-5.95 C101.18,62.7,103.57,60.45,107.21,56.09L107.21,56.09L107.21,56.09z M13.12,83.95c0.74-0.27,1.53-0.52,2.38-0.77l-2.1-7.84 c-0.18-0.66-0.87-1.06-1.53-0.88c-0.66,0.18-1.06,0.87-0.88,1.53L13.12,83.95L13.12,83.95z M17.46,82.64 c0.78-0.2,1.59-0.4,2.42-0.6l-2.11-7.87c-0.18-0.66-0.87-1.06-1.53-0.88c-0.66,0.18-1.06,0.87-0.88,1.53L17.46,82.64L17.46,82.64z M21.87,81.58l2.43-0.56L22.15,73c-0.18-0.66-0.87-1.06-1.53-0.88c-0.66,0.18-1.06,0.87-0.88,1.53L21.87,81.58L21.87,81.58z M9.73,59.87l1.26-6.85l4.33,5.25c-0.94,0.4-1.9,0.75-2.87,1.02C11.56,59.55,10.65,59.75,9.73,59.87L9.73,59.87L9.73,59.87z M37.14,41.18c-1.15,0.04-2.03,0.28-2.63,0.69c-0.34,0.23-0.59,0.52-0.75,0.87c-0.18,0.39-0.26,0.86-0.25,1.4 c0.05,1.59,0.88,3.66,2.48,6.05l0.02,0.03l0,0l5.21,8.29c2.09,3.32,4.28,6.71,7,9.2c2.62,2.39,5.79,4.01,9.99,4.02 c4.55,0.01,7.87-1.67,10.57-4.2c2.81-2.63,5.02-6.23,7.21-9.83l5.87-9.67c1.09-2.5,1.49-4.17,1.24-5.15 c-0.15-0.58-0.79-0.87-1.89-0.92c-0.23-0.01-0.47-0.01-0.71-0.01c-0.26,0.01-0.54,0.03-0.82,0.05c-0.16,0.01-0.31,0-0.45-0.03 c-0.52,0.03-1.06-0.01-1.61-0.09l2.01-8.9c-14.92,2.35-26.07-8.73-41.84-2.22l1.14,10.49C38.31,41.29,37.7,41.26,37.14,41.18 L37.14,41.18L37.14,41.18z M83.23,39.31c1.44,0.44,2.37,1.36,2.75,2.84c0.42,1.64-0.04,3.96-1.43,7.12l0,0 c-0.03,0.06-0.05,0.11-0.09,0.17l-5.94,9.78c-2.29,3.77-4.61,7.55-7.71,10.45c-3.21,3.01-7.17,5.01-12.58,4.99 c-5.05-0.01-8.86-1.94-11.98-4.8c-3.01-2.76-5.32-6.31-7.51-9.8l-5.21-8.28c-1.91-2.84-2.9-5.44-2.96-7.57 c-0.03-1,0.14-1.91,0.51-2.71c0.39-0.84,0.99-1.54,1.79-2.08c0.38-0.25,0.8-0.47,1.26-0.64c-0.34-4.49-0.46-10.16-0.25-14.9 c0.11-1.12,0.33-2.25,0.64-3.37c1.33-4.76,4.67-8.59,8.8-11.22c2.28-1.45,4.78-2.55,7.38-3.28c1.65-0.47-1.41-5.76,0.3-5.93 c8.27-0.85,21.66,6.7,27.43,12.95c2.89,3.13,4.71,7.28,5.1,12.77L83.23,39.31L83.23,39.31L83.23,39.31z" />
                  </g>
                </svg>

                <h2 className="text-xl group-hover:text-white text-left mt-4 font-heading  font-bold tracking-wider">
                  Wide Range of Skins
                </h2>
              </div>

              <p className="group-hover:text-white capitalize font-body hover:text-white md:text-base text-sm mt-1">
                We have a variety of classic designs and materials to choose
                from
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
