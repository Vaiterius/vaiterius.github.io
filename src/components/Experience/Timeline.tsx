import TimelineItem from "./TimelineItem";
import Button from "../Button";

const Timeline = () => {
	return (
		<ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
			<TimelineItem
				date="2025"
				position="Junior Software Engineer"
				company="(Your Company Here)"
				logoUrl=""
				content={
					<div>
						<p className="mb-3">
							Currently seeking new grad, entry-level opportunities this year. I am
							excited to immerse myself in real-world software development and make
							meaningful contributions. Who will be the company that will get me on my
							feet in the industry?
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
				date="February 2024 - December 2024"
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
				date="October 2023 - December 2024"
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
			<TimelineItem
				date="August 2024 - November 2024"
				position="QA Intern"
				company="5Head Games"
				logoUrl="/logos/5headgames.png"
				logoWithPadding={false}
				content={
					<p className="ml-0 list-none md:ml-2 md:list-disc">
						Contributed to quality assurance processes for the browser-based web3
						trading card game, Enders Gate, ensuring product stability through
						systematic testing and detailed issue documentation via identifying critical
						issues and submitting bug reports.
					</p>
				}
				onLeft={true}
			/>
		</ul>
	);
};

export default Timeline;
