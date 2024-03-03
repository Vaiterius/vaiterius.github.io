import SkillsSectionGroup from "./SkillsSectionGroup";
import Skill from "./SkillItem";
import "../../blur.css";

const SkillsSection = () => {
	return (
		<div>
			<SkillsSectionGroup
				name="Languages/Databases"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="Python" url="/logos/python.svg" />
						<Skill name="TypeScript" url="/logos/typescript.svg" />
						<Skill name="Java" url="/logos/java.svg" />
						<Skill name="HTML/CSS" url="/logos/html.svg" />
						<Skill name="C/C++" url="/logos/c.svg" />
						<Skill name="PostgreSQL" url="/logos/postgresql.svg" />
						<Skill name="MongoDB" url="/logos/mongodb.svg" />
					</ul>
				}
			/>
			<SkillsSectionGroup
				name="Frameworks/Libraries"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="Flask" url="/logos/flask.svg" lightBackground={true} />
						<Skill name="Django" url="/logos/django.svg" />
						<Skill name="React" url="/logos/react.svg" />
						<Skill name="FastAPI" url="/logos/fastapi.svg" />
						<Skill name="TailwindCSS" url="/logos/tailwindcss.svg" />
						<Skill name="Bootstrap" url="/logos/bootstrap.svg" />
					</ul>
				}
			/>
			<SkillsSectionGroup
				name="Platforms"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="Heroku" url="/logos/heroku.svg" />
						<Skill name="Fly.io" url="/logos/fly.io.svg" />
						<Skill name="Expo" url="/logos/expo.svg" lightBackground={true} />
						<Skill name="Netlify" url="/logos/netlify.svg" />
						<Skill name="AWS" url="/logos/aws.svg" lightBackground={true} />
						<Skill name="Google Cloud" url="/logos/google-cloud.svg" />
						<Skill name="Drupal" url="/logos/drupal.svg" />
						<Skill name="WordPress" url="/logos/wordpress.svg" />
					</ul>
				}
			/>
			<SkillsSectionGroup
				name="Tools"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="Git" url="/logos/git.svg" />
						<Skill name="Docker" url="/logos/docker.svg" />
						<Skill name="Jest" url="/logos/jest.svg" />
						<Skill name="VSCode" url="/logos/vscode.svg" />
						<Skill name="Figma" url="/logos/figma.svg" />
					</ul>
				}
			/>
		</div>
	);
};

export default SkillsSection;
