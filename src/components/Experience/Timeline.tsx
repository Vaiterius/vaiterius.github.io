import TimelineItem from "./TimelineItem";
import Button from "../Button";

const Timeline = () => {
	return (
		<ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
			<TimelineItem
				date="Summer 2024"
				position="Software Engineer Intern"
				company="Your Company Here"
				logoUrl=""
				content={
					<div>
						<p className="mb-3">
							Currently seeking internship opportunities for next Summer. I am excited
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
				onLeft={true}
			/>
			<TimelineItem
				date="October 2023 - Present"
				position="Web Design Intern"
				company="IntersectLA | CSUN"
				logoUrl="/logos/ixla.png"
				content={
					<ul className="ml-0 list-none md:ml-7 md:list-disc">
						<li className="mb-3">
							Co-lead the migration process of 4 university department websites
							achieving a more contemporary look via comprehensive UX/UI redesigns
						</li>
						<li className="mb-3">
							Employed Figma for restructuring site navigation via sitemapping and
							wireframing for a more intuitive and user-friendly experience
						</li>
						<li className="mb-3">
							Implemented the content and designs into the new webpages using Drupal
							CMS
						</li>
						<li className="mb-3">
							Participated in periodic client meetings and incorporated feedback to
							ensure quality is up to company and client standards
						</li>
					</ul>
				}
				onLeft={false}
			/>
		</ul>
	);
};

export default Timeline;
