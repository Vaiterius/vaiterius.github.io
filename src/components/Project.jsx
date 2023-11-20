import Button from "./Button.jsx";

const Project = ({ title, tools, description, imageUrl, imageAlt, sourceUrl, demoUrl }) => {
	return (
		<article>
			<img src={imageUrl} alt={imageAlt} />
			<h3>{title}</h3>
			<h4>
				{tools.map((value, index) => (
					<span key={index}>{value}</span>
				))}
			</h4>
			<p>{description}</p>
			<Button url={sourceUrl} className="btn" text="GitHub repo" />
			<Button url={demoUrl} className="btn" text="View live" />
		</article>
	);
};

export default Project;
