"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import React from "react";
import Image from "next/image";
import "react-photo-view/dist/react-photo-view.css";
import { urlFor } from "@/lib/sanity";

export type AttractionImagesProps = {
	images?: { asset: { url: string; _id: string } }[];
	mainImage?: { asset: { _ref: string; _type: string } };
};

const AttractionImages = (props: AttractionImagesProps) => {
	return (
		<div>
			<PhotoProvider>
				<PhotoView src={urlFor(props.mainImage).url()}>
					<Image
						alt=""
						width={1000}
						height={1000}
						src={urlFor(props.mainImage).url()}
						className="cursor-zoom-in"
					/>
				</PhotoView>
				{props.images?.map((item) => (
					<PhotoView src={urlFor(item.asset.url).url()} key={item.asset._id}>
						<Image
							className="cursor-zoom-in"
							alt=""
							src={urlFor(item.asset.url).url()}
							width={1000}
							height={1000}
						/>
					</PhotoView>
				))}
			</PhotoProvider>
		</div>
	);
};

export default AttractionImages;
