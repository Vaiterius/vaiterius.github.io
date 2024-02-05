import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
	return (
		<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
			<ProjectItem
				title="Blogging Web App"
				tools={["Python", "Flask", "PostgreSQL", "Heroku", "AWS s3"]}
				description="A blogging social application where users post on their feed, follow others, and interact with posts by liking and commenting. Allows user-uploaded images."
				imageUrl="#"
				imageAlt="TODO image"
				sourceUrl="https://github.com/Vaiterius/Miniblog-App"
				demoUrl="https://flask-bruhlog.herokuapp.com/global"
			/>
			<ProjectItem
				title="Portfolio Website"
				tools={["Astro", "React", "TailwindCSS", "daisyUI"]}
				description="You're looking at it right now! A website to showcase my projects and all about me. Made to be responsive on mobile. (Currently in redevelopment)"
				imageUrl="#"
				imageAlt="TODO image"
				sourceUrl="https://github.com/Vaiterius/vaiterius.github.io"
				demoUrl="https://vaiterius.github.io/"
			/>
			<ProjectItem
				title="Traditional Roguelike RPG"
				tools={["Python"]}
				description="An terminal CLI dungeon crawler filled with procedurally-generated levels where you fight enemies, upgrade your gear, and progress your character. Made entirely within the standard library."
				imageUrl="#"
				imageAlt="TODO image"
				sourceUrl="https://github.com/Vaiterius/Traditional-Roguelike"
				demoUrl="#"
			/>
			<ProjectItem
				title="Music Mosaic Timeline"
				tools={["React", "TypeScript", "TailwindCSS"]}
				description="A mini web app that displays your top music albums as 4x4 collages throughout the months of the year with the Last.fm API"
				imageUrl="#"
				imageAlt="TODO image"
				sourceUrl="https://github.com/Vaiterius/Music-Mosaic-Timeline"
				demoUrl="https://lastfm-albums-timeline.netlify.app/"
			/>
			<ProjectItem
				title="Monty Python Quotes API & bot"
				tools={["Python", "FastAPI", "SQLite", "Docker", "Tweepy"]}
				description="A RESTful API that returns dialogue and quotes from a Monty Python's Flying Circus scripts dataset. Also comes with a Twitter bot that tweets quotes daily."
				imageUrl="#"
				imageAlt="TODO image"
				sourceUrl="https://github.com/Vaiterius/Monty-Pythons-Flying-API"
				demoUrl="https://monty-pythons-flying-api.fly.dev/v1/docs"
			/>
		</div>
	);
};

export default ProjectSection;
