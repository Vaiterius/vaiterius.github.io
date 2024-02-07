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
					"Web Designer at student-run design company IntersectLA",
					"Clubs & Activities: Software Developers Club, Archery Recreational Team, Environmental Club, Game Development Club",
				]}
			/>
			<EducationItem
				name="College of the Canyons"
				dates="August 2020 - May 2022"
				logoUrl="/logos/coc.png"
				items={["Associate of Science, Physics", "Associate of Science, Mathematics"]}
			/>
		</div>
	);
};

export default EducationSection;
