import TimelineItem from "./TimelineItem";
import Button from "../Button";

const Timeline = () => {
	return (
		<ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
			<TimelineItem
				date="Summer 2024"
				position="Software Engineer Intern"
				company="Your Company Here"
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
				content={
					<ul className="ml-0 list-none md:ml-7 md:list-disc">
						<li className="mb-3">
							Overhauled outdated webpages using Drupal and Wordpress for multiple
							university department sites
						</li>
						<li className="mb-3">
							Co-lead projects throughout its development while getting periodic
							feedback from clients and project advisors ensuring quality is up to
							company standards
						</li>
						<li>
							Restructured site navigation improving user experience and utilized
							Figma for wireframing and sitemapping
						</li>
					</ul>
				}
				onLeft={false}
			/>
		</ul>
	);
};

export default Timeline;
