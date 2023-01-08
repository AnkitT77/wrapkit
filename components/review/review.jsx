import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

export default function Family() {
	return (
		<div className="bg-zinc-50 px-5 md:py-20  py-14">

			<div className=" max-w-6xl flex gap-10 mx-auto w-full flex-col md:flex-row text-center items-center justify-center gap-6 ">

				<div className="text-center w-full items-center justify-start ">
					<div className='flex flex-col gap-2 text-center justify-start items-center'>
						<h2 className="md:text-4xl text-3xl  font-heading uppercase font-bold text-zinc-800 ">Our  Happy
							<br />
							Wrapkit Family
						</h2>
						<div className='flex flex-row-1 text-center justify-center items-center mt-3'>
							<div className="w-[100px] h-px  bg-indigo-500 center  mr-[20px]" />
							<Image src="/img/wrapicon.png"
								   width={30} height={30}
							/>

							<div className="w-[100px] h-px  bg-indigo-500 ml-[20px] " />
						</div>

					</div>




					<p className="max-w-[500px] md:text-lg font-sans mt-7">Wrapkit skins are thin textured self adhesive sheets that are precisely cut for your device. Unlike traditional cases and covers, you can stylize your device without adding bulk and keep its form factor. It also protects your devices from scratches and fingerprints, and the texture gives your phone a better grip.
						</p>
				</div>

				<div className="w-full ">
					<div className=" mx-auto max-w-[400px] w-full ">
						<div className="relative flex flex-col w-full ">
							<Carousel
								autoPlay
								infiniteLoop
								showStatus={false}
								showIndicators={true}
								showThumbs={true}
								interval={2000}
							>
								<div className="h-[300px] w-full">
									<Image src="/img/carosel1.jpg" alt="family" objectFit="fill" layout="fill" />
								</div>
									<div className="h-[300px] w-full">
									<Image src="/img/carosel5.jpeg" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[250px] w-full">
									<Image src="/img/carosel3.webp" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/img/carosel4.webp" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/img/carosel2.jpg" alt="family" objectFit="fill" layout="fill" />
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}