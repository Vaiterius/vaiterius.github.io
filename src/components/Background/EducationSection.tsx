import EducationItem from "./EducationItem";
import "../../blur.css";

const EducationSection = () => {
	return (
		<div>
			<EducationItem
				name="California State University, Northridge"
				dates="August 2022 - December 2024 (expected)"
				logoUrl="/logos/csun.png"
				items={[
					"Bachelor of Science, Computer Science",
					"Web Designer at on-campus design agency, IntersectLA",
					"Associate Software Developer at ARCS",
					"General Officer at the Game Development Club",
					"Clubs & Activities: Game Development Club, Software Developers Club, Punk Rock Club, Archery Recreational Team, Environmental Club",
				]}
			/>
			<EducationItem
				name="College of the Canyons"
				dates="August 2020 - May 2022"
				logoUrl="/logos/coc.png"
				items={[
					"Associate of Science, Physics",
					"Associate of Science, Mathematics",
					"Mathematics, Engineering and Science Achievement (MESA) Program",
				]}
			/>
		</div>
	);
};

export default EducationSection;
