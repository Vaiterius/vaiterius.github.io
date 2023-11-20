import Button from "./Button.jsx";

const Project = ({ title, tools, description, imageUrl, imageAlt, sourceUrl, demoUrl }) => {
	return (
		<article className="card card-compact bg-neutral shadow-xl">
			<figure>
				<img src="https://placehold.co/600x300" alt={imageAlt} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
			</div>
			<div className="card-actions justify-end mr-4">
				{tools.map((toolName, index) => (
					<span key={index} className="badge badge-outline">
						{toolName}
					</span>
				))}
			</div>
			<div className="card-actions justify-end p-4">
				<Button className="btn btn-primary" text="View Demo" url={sourceUrl} />
				<Button className="btn btn-secondary" text="GitHub" url={demoUrl} />
			</div>
		</article>
	);
};

export default Project;
