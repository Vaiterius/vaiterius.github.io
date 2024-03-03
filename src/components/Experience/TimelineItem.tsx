import React from "react";

import "../../blur.css";

const TimelineItem = (props: {
	date: string;
	position: string;
	company: string;
	logoUrl: string;
	logoWithPadding: boolean;
	content: React.ReactNode;
	onLeft: boolean;
}) => {
	return (
		<li>
			<hr />
			<div className="timeline-middle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					className="h-5 w-5"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div
				className={props.onLeft ? "timeline-start mb-10 md:text-end" : "timeline-end mb-10"}
			>
				<time className={props.onLeft ? "mr-2 font-mono italic" : "ml-2 font-mono italic"}>
					{props.date}
				</time>

				{/* The card itself */}
				<div className="blurry card card-compact m-2 bg-neutral p-3 shadow-xl">
					<div
						className={
							props.onLeft
								? "card-body items-center text-center md:items-end md:text-end"
								: "card-body items-center text-center md:items-start md:text-start"
						}
					>
						<div className={props.onLeft ? "flex flex-row-reverse" : "flex"}>
							{/* Optional logo */}
							{props.logoUrl !== "" && (
								<img
									className={`ml-2 ${
										props.onLeft ? "mr-0" : "mr-4"
									} h-14 w-14 rounded-md bg-white ${
										props.logoWithPadding && "p-2"
									} hidden md:flex`}
									src={props.logoUrl}
									alt={`Logo of ${props.company}`}
								/>
							)}
							<div className={props.onLeft ? "mr-2 flex flex-col items-end" : ""}>
								<h3 className="card-title text-xl font-black text-primary">
									{props.position}
								</h3>
								<p className="text-secondary">{props.company}</p>
							</div>
						</div>
						<div className="card-actions">{props.content}</div>
					</div>
				</div>
			</div>
			<hr />
		</li>
	);
};

TimelineItem.defaultProps = {
	logoWithPadding: false,
};

export default TimelineItem;
