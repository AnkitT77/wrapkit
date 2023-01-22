import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

export default function Baner() {
	return (
		<>
			<div className="w-full">
				<div className="relative">
					<Carousel
						showThumbs={false}
						autoPlay
						infiniteLoop
						showStatus={false}
						interval={3000}
					>


						<div>
							<Image layout="responsive" src="/banner/banner3.png" alt="banner2" width={1280} height={640} />
						</div>

						<div>
							<Image loading="lazy" layout="responsive" src="/banner/banner1.png" alt="banner3" width={1280} height={640}/>
						</div>
						<div>
							<Image loading="lazy" layout="responsive" src="/banner/banner2.png" alt="banner4"  width={1280} height={640} />
						</div>
					</Carousel>
				</div>
			</div>
		</>
	);
}
