const Timeline = () => {
	return (
		<ul className="timeline timeline-vertical timeline-snap-icon">
			<li>
				<div className="timeline-middle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fillRule="currentColor"
						className="h-5 w-5"
					>
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>
				<div className="timeline-start mb-10 md:text-end">
					<time datetime="" className="font-mono italic">
						2023
					</time>
					<div className="text-lg font-black">Hello World!</div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit impedit
					praesentium repellendus ratione provident perferendis dignissimos neque
					veritatis excepturi officiis. Reprehenderit, voluptas ipsum quae sed sit
					voluptates! Cumque, maxime a.
				</div>
				<hr />
			</li>
		</ul>
	);
};

export default Timeline;
