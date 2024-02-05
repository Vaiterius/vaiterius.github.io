const SectionSubheader = (props: { text: string }) => {
	return (
		<h3 className="text-2xl font-black">
			{props.text} <span className="font-light text-accent">//</span>
		</h3>
	);
};

export default SectionSubheader;
