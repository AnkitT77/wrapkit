import Image from "next/image";
import { useInView } from "react-cool-inview";
import React, { useState } from "react";
import { Trail2 } from "../react-spring/trailanimation";
export default function AboutEco() {

	const [animatein, setanimatein] = useState(false);

	const { observe } = useInView({
		// For an element to be considered "seen", we'll say it must be 100% in the viewport
		threshold: 0.8,
		onEnter: ({ unobserve }) => {
			setanimatein(true);
			// Stop observe when the target enters the viewport, so the callback only triggered once
			unobserve();
		},
	});



	const arr = ["Don’t know what Skins are? No problem", "Hide Scratches", "3D Embossed Texture"];

	return (
		<div className="w-full md:py-20 bg-[#F1F6FB] py-14 text-[#184029]">
			<div className="w-full flex flex-col items-center text-center justify-center ">
				<div className="flex w-full  justify-center items-center">

					<div className='flex flex-col text-center justify-center items-center'>
						<h2 className="md:text-4xl text-3xl w-full font-display font-semibold text-zinc-800 tracking-wider md:text-4xl ">
							Our Features
						</h2>
						<div className='flex flex-row-1 text-center justify-center items-center mt-3'>
							<div className="w-[100px] h-px  bg-indigo-500 center  mr-[20px]" />
							<Image src="/img/wrapicon.png"
								   width={30} height={30}
							/>

							<div className="w-[100px] h-px  bg-indigo-500 ml-[20px] " />
						</div>

					</div>

				</div>
			</div>
			<div className="capitalize mt-8 flex flex-col max-w-3xl gap-2  items-center font-body  px-5 mx-auto text-center">
				<p className="leading-7  md:text-lg">
					Our wraps are made of high-quality vinyl, which makes them both flexible and long-lasting.
				</p>
			</div>
			<div className="flex max-w-6xl px-5 pt-14 md:pt-16 mx-auto w-full  flex-col items-center justify-between sm:flex-row">
				<div className="w-full sm:w-1/2 ">
					<div className=" w-full h-[300px] md:h-96 relative">
						<Image
							src="/banner/banner1.jpeg"
							layout="fill"
							className="rounded"
							objectFit="cover"
							quality={100}
						/>
					</div>
				</div>
				<div ref={observe} className="w-full   h-96 flex justify-center md:w-1/2">
					{animatein && (
						<div
							className="flex h-full flex-col gap-y-5 my-8 md:mx-4 "
						>
							<h2
								className="md:text-3xl text-2xl font-bold font-display tracking-wider"
							>
								WHAT MAKES US UNIQUE ?
							</h2>

							<div className="flex flex-col gap-5">
								<Trail2 open={animatein}>
									{arr.map((item, i) => (
										<Text key={i} name={item} />
									))}
								</Trail2>

							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function Text({ name }) {
	return (
		<>
			<div className="flex gap-x-2 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[17px] sm:w-[25px] sm:h-[25px]"
					 viewBox="0 0 30 23">
					<g fill="none" fillRule="evenodd">
						<g fill="#72AB00" fillRule="nonzero">
							<g>
								<path
									d="M11.488 22.557c-.287.284-.678.443-1.083.443-.406 0-.797-.159-1.083-.443l-8.649-8.54c-.897-.887-.897-2.324 0-3.208l1.083-1.07c.898-.886 2.352-.886 3.25 0l5.399 5.332L24.995.665c.898-.887 2.353-.887 3.249 0l1.083 1.07c.897.885.897 2.322 0 3.207l-17.84 17.615z"
									transform="translate(-686 -7850) translate(686 7850)"></path>
							</g>
						</g>
					</g>
				</svg>
				<p className="text-lg md:text-xl">{name}</p>
			</div>
		</>
	);
}
