import React from "react";

const CtaCallButton = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<a
			href="tel:+48662712418"
			className="animate-bounce rounded-md bg-white px-4 py-2 text-primaryc transition-colors hover:bg-white/90"
			{...props}
		>
			Zadzwoń i zarezerwuj
		</a>
	);
};

export default CtaCallButton;
