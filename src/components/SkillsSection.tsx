import Skill from "./Skill";

const SkillsSection = () => {
	return (
		<div>
			{/* Languages/Databases */}
			<div className="m-2 ml-0 rounded-lg bg-neutral p-2">
				<div className="flex">
					<h4 className="mb-2 border-b-2 font-bold italic">Languages/Databases</h4>
				</div>
				<ul className="flex flex-row flex-wrap">
					<Skill name="Python" url="/logos/python.svg" />
					<Skill name="TypeScript" url="/logos/typescript.svg" />
					<Skill name="Java" url="/logos/java.svg" />
					<Skill name="HTML/CSS" url="/logos/html.svg" />
					<Skill name="C/C++" url="/logos/c.svg" />
					<Skill name="PostgreSQL" url="/logos/postgresql.svg" />
					<Skill name="MongoDB" url="/logos/mongodb.svg" />
				</ul>
			</div>
			{/* Frameworks/Libraries */}
			<div className="m-2 ml-0 rounded-lg bg-neutral p-2">
				<h4>Frameworks/Libraries</h4>
				<ul>
					<Skill name="Flask" url="/logos/flask.svg" lightBackground={true} />
					<Skill name="Django" url="/logos/django.svg" />
					<Skill name="React" url="/logos/react.svg" />
					<Skill name="FastAPI" url="/logos/fastapi.svg" />
					<Skill name="TailwindCSS" url="/logos/tailwindcss.svg" />
					<Skill name="Bootstrap" url="/logos/bootstrap.svg" />
				</ul>
			</div>
			{/* Platforms */}
			<div className="m-2 ml-0 rounded-lg bg-neutral p-2">
				<ul>
					<h4>Platforms</h4>
					<Skill name="Heroku" url="/logos/heroku.svg" />
					<Skill name="Fly.io" url="/logos/fly.io.svg" />
					<Skill name="Netlify" url="/logos/netlify.svg" />
					<Skill name="AWS" url="/logos/aws.svg" lightBackground={true} />
					<Skill name="Google Cloud" url="/logos/google-cloud.svg" />
					<Skill name="Drupal" url="/logos/drupal.svg" />
					<Skill name="WordPress" url="/logos/wordpress.svg" />
				</ul>
			</div>
			{/* Tools */}
			<div className="m-2 ml-0 rounded-lg bg-neutral p-2">
				<h4>Tools</h4>
				<ul>
					<Skill name="Git" url="/logos/git.svg" />
					<Skill name="Docker" url="/logos/docker.svg" />
					<Skill name="Jest" url="/logos/jest.svg" />
					<Skill name="VSCode" url="/logos/vscode.svg" />
					<Skill name="Figma" url="/logos/figma.svg" />
				</ul>
			</div>
		</div>
	);
};

export default SkillsSection;
