import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["cdn.sanity.io"], // 👈 Dodaj to!
	},
};

export default nextConfig;
