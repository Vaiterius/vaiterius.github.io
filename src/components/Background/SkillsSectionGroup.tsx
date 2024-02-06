import React from "react";

import "../../blur.css";

const SkillsSectionGroup = (props: { name: string; skills: React.ReactNode }) => {
	return (
		<div className="blurry m-2 ml-0 rounded-xl bg-neutral p-2 pl-4">
			<div className="flex justify-center lg:justify-start">
				<h4 className="mb-2 font-bold text-primary">{props.name}</h4>
			</div>
			<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
				{props.skills}
			</ul>
		</div>
	);
};

export default SkillsSectionGroup;
