const Skill = (props: { name: string; url: string; lightBackground: boolean }) => {
	return (
		<div className="tooltip tooltip-info mx-2" data-tip={props.name}>
			<img
				className={`h-8 w-8 ${props.lightBackground ? "rounded-lg bg-white p-1" : ""}`}
				src={props.url}
				alt={props.name}
			/>
		</div>
	);
};

Skill.defaultProps = {
	lightBackground: false,
};

export default Skill;
