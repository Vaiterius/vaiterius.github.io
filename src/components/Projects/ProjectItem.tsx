import Button from "../Button";
import "../../blur.css";

const ProjectItem = (props: {
	title: string;
	tools: string[];
	description: string;
	imageUrl: string;
	imageAlt: string;
	sourceUrl: string;
	demoUrl: string;
}) => {
	return (
		<article className="blurry card card-compact bg-neutral shadow-xl">
			<figure>
				<img src="https://placehold.co/600x300" alt={props.imageAlt} />
			</figure>
			<div className="card-body text-left">
				<h2 className="card-title">{props.title}</h2>
				<p>{props.description}</p>
			</div>
			<div className="card-actions mr-4 justify-end">
				{props.tools.map((toolName: string, index: number) => (
					<span key={index} className="badge badge-outline">
						{toolName}
					</span>
				))}
			</div>
			<div className="card-actions justify-end p-4">
				<Button className="btn" text="View Demo" url={props.demoUrl} newTab={true} />
				<Button
					className="btn btn-outline"
					text="GitHub"
					url={props.sourceUrl}
					newTab={true}
				/>
			</div>
		</article>
	);
};

export default ProjectItem;
