import TimelineItem from "./TimelineItem";
import Button from "../Button";

const Timeline = () => {
	return (
		<ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
			<TimelineItem
				date="Summer 2024"
				position="Software Engineer Intern"
				company="(Your Company Here)"
				logoUrl=""
				content={
					<div>
						<p className="mb-3">
							Currently seeking internship opportunities for this Summer. I am excited
							to immerse myself in real-world software development and make meaningful
							contributions. Who will be the company that will get me on my feet in
							the industry?
						</p>
						<Button
							url="#contact"
							className="btn btn-outline w-full"
							text="Hire me!"
							newTab={false}
						/>
					</div>
				}
				onLeft={false}
			/>
			<TimelineItem
				date="February 2024 - Present"
				position="Associate Software Developer"
				company="Autonomy Research Center for STEAHM (ARCS) | CSUN"
				logoUrl="/logos/arcs.png"
				content={
					<p className="ml-0 list-none md:ml-2 md:list-disc">
						NASA-funded research center. Worked as one of the iOS developers on the
						cross-platform developer team working on a smart clothing app that offers
						performance insights on student athletes. Utilized React Native with Expo
						and a bit of Swift.
					</p>
				}
				onLeft={true}
			/>
			<TimelineItem
				date="October 2023 - Present"
				position="Web Designer"
				company="IntersectLA | CSUN"
				logoUrl="/logos/ixla.png"
				logoWithPadding={true}
				content={
					<p className="ml-0 list-none md:ml-2 md:list-disc">
						Worked in teams where I co-lead with fellow student leads to design and
						build new websites for multiple university departments and help with the
						migration process to web2. Utilized Figma for design and Wordpress/Drupal
						for building.
					</p>
				}
				onLeft={false}
			/>
		</ul>
	);
};

export default Timeline;
