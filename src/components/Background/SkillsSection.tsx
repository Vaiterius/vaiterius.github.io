import SkillsSectionGroup from "./SkillsSectionGroup";
import Skill from "./SkillItem";
import "../../blur.css";

const SkillsSection = () => {
	return (
		<div>
			<SkillsSectionGroup
				name="Languages & Data"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="Python" url="/logos/python.svg" />
						<Skill name="TypeScript" url="/logos/typescript.svg" />
						<Skill name="HTML/CSS" url="/logos/html.svg" />
						<Skill name="C/C++" url="/logos/c.svg" />
						<Skill name="PostgreSQL" url="/logos/postgresql.svg" />
						<Skill name="MongoDB" url="/logos/mongodb.svg" />
					</ul>
				}
			/>
			<SkillsSectionGroup
				name="Frameworks"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="React Native" url="/logos/react.svg" />
						<Skill name="Django REST Framework" url="/logos/django.svg" />
						<Skill name="FastAPI" url="/logos/fastapi.svg" />
						<Skill name="Tailwind CSS" url="/logos/tailwindcss.svg" />
					</ul>
				}
			/>
			<SkillsSectionGroup
				name="Tools"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="Git" url="/logos/git.svg" />
						<Skill name="VS Code" url="/logos/vscode.svg" />
						<Skill name="Docker" url="/logos/docker.svg" />
						<Skill name="Sentry" url="/logos/sentry.svg" lightBackground={true} />
						<Skill name="Jest" url="/logos/jest.svg" />
						<Skill name="Figma" url="/logos/figma.svg" />
					</ul>
				}
			/>
			<SkillsSectionGroup
				name="Platforms & AI"
				skills={
					<ul className="flex flex-wrap justify-center space-x-4 lg:justify-start">
						<Skill name="AWS" url="/logos/aws.svg" lightBackground={true} />
						<Skill name="Netlify" url="/logos/netlify.svg" />
						<Skill name="Expo" url="/logos/expo.svg" lightBackground={true} />
						<Skill name="WordPress" url="/logos/wordpress.svg" />
						<Skill name="Claude Code" url="/logos/claude.svg" />
						<Skill name="Codex" url="/logos/codex.svg" />
					</ul>
				}
			/>
		</div>
	);
};

export default SkillsSection;
