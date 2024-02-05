import SectionHeader from "../SectionHeader";
import SectionSubheader from "../SectionSubheader";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import HorizontalRule from "../HorizontalRule";

const Background = () => {
	return (
		<div>
			<SectionHeader text="Background" />
			<HorizontalRule />

			<div className="flex flex-col items-center space-x-4 lg:flex-row lg:items-baseline">
				{/* About Me */}
				<section className="w-full xl:w-1/3">
					{/* <article className="mb-4">
							<SectionSubheader text="About" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
								quibusdam sapiente vero enim deserunt amet delectus animi officiis
								quis! Esse quod sunt dignissimos consequuntur debitis quibusdam odio
								non veritatis odit.
							</p>
						</article> */}
					<article className="mb-4">
						<SectionSubheader text="Skills & Technologies" />
						<SkillsSection />
					</article>
				</section>

				{/* Education and Experience */}
				<section className="flex w-full flex-col xl:w-2/3">
					<div>
						<SectionSubheader text="Education" />
						<EducationSection />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Background;
