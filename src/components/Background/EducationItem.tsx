const EducationItem = (props: {
	name: string;
	dates: string;
	logoUrl: string;
	items: string[];
}) => {
	return (
		<article className="blurry m-2 rounded-xl bg-base-100 p-4">
			<div className="flex">
				<img
					className="ml-2 mr-2 h-14 w-14"
					src={props.logoUrl}
					alt={`Logo of ${props.name}`}
				/>
				<div className="flex flex-col">
					<h4 className="text-xl font-bold text-primary">{props.name}</h4>
					<div className="italic text-secondary">{props.dates}</div>
				</div>
			</div>
			<ul className="ml-7 list-disc text-left">
				{props.items.map((item: string, index: number) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</article>
	);
};

export default EducationItem;
