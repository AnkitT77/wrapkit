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
							<Image layout="responsive" src="/banner/banner2.jpeg" alt="banner2" width={2000} height={800} />
						</div>

						<div>
							<Image loading="lazy" layout="responsive" src="/banner/banner3.jpeg" alt="banner3" width={2000} height={800} />
						</div>
						<div>
							<Image loading="lazy" layout="responsive" src="/banner/banner4.jpeg" alt="banner4" width={2000} height={800} />
						</div>
						<div>
							<Image loading="lazy" layout="responsive" src="/banner/banner5.jpeg" alt="banner5" width={2000} height={800} />
						</div>
						<div>
							<Image loading="lazy" layout="responsive" src="/banner/banner6.jpeg" alt="banner6" width={2000} height={800} />
						</div>
					</Carousel>
				</div>
			</div>
		</>
	);
}
