import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
	return (
		<div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
			<ProjectItem
				title="Smart-Textile Clothing App"
				tools={["React Native", "JavaScript", "Swift", "Expo", "Firestore"]}
				description="A mobile platform aimed at interfacing smart-clothing for collecting and analyzing health data for student athletes. Worked in an agile team as a backend iOS developer."
				imageUrl="/images/smart-clothing-app.png"
				imageAlt="An overview of the multiple screens built to track health data"
				sourceUrl="https://github.com/CSU-Northridge-ARCS-Dev/smart-clothing-app"
				demoUrl=""
			/>
			<ProjectItem
				title="Greatreads Book Review Platform"
				tools={[".NET", "C#", "Angular", "TypeScript", "Playwright", "PostgreSQL", "AWS"]}
				description="A book-reviewing platform for avid readers to search millions of Google book entries and write reviews on them."
				imageUrl="/images/greatreads.png"
				imageAlt="An early snapshot of the website on the book search page"
				sourceUrl="https://github.com/Vaiterius/Book-Review-App"
				demoUrl=""
			/>
			<ProjectItem
				title="Music Mosaic Timeline"
				tools={["React", "TypeScript", "TailwindCSS"]}
				description="A mini web app that displays your top music albums as 4x4 collages throughout the months of the year with the Last.fm API. (Hint: type my username Vaiterius)"
				imageUrl="/images/music-mosaic-timeline.png"
				imageAlt="2022 timeline album images from my username"
				sourceUrl="https://github.com/Vaiterius/Music-Mosaic-Timeline"
				demoUrl="https://lastfm-albums-timeline.netlify.app/"
			/>
			<ProjectItem
				title="Traditional Roguelike RPG"
				tools={["Python"]}
				description="An terminal CLI dungeon crawler filled with procedurally-generated levels where you fight enemies, upgrade your gear, and progress your character. Made entirely within the standard library."
				imageUrl="/images/traditional-roguelike.png"
				imageAlt="In-game screenshot of the player using their staff to target an enemy"
				sourceUrl="https://github.com/Vaiterius/Traditional-Roguelike"
				demoUrl="https://github.com/Vaiterius/Traditional-Roguelike?tab=readme-ov-file#run-me"
			/>
			<ProjectItem
				title="Blogging Web App"
				tools={["Python", "Flask", "PostgreSQL", "Heroku", "AWS"]}
				description="A blogging social application where users post on their feed, follow others, and interact with posts by liking and commenting. Allows user-uploaded images."
				imageUrl="/images/bruhlog.png"
				imageAlt="A comment section from one of my previous blog posts"
				sourceUrl="https://github.com/Vaiterius/Miniblog-App"
				// demoUrl="https://flask-bruhlog.herokuapp.com/global"
				demoUrl=""
			/>
			<ProjectItem
				title="Monty Python Quotes API & bot"
				tools={["Python", "FastAPI", "SQLite", "Docker", "Tweepy"]}
				description="A RESTful API that returns dialogue and quotes from a Monty Python's Flying Circus scripts dataset. Also comes with a Twitter bot that tweets quotes daily."
				imageUrl="/images/monty-pythons-flying-api.png"
				imageAlt="A swagger UI documentation of the API"
				sourceUrl="https://github.com/Vaiterius/Monty-Pythons-Flying-API"
				demoUrl="https://monty-pythons-flying-api.fly.dev/v1/docs"
			/>
			<ProjectItem
				title="Portfolio Website"
				tools={["Astro", "React", "TailwindCSS", "daisyUI"]}
				description="You're looking at it right now! A website to showcase my software projects and all about me. Responsive on mobile. Hope you like it! :)"
				imageUrl="/images/portfolio-website.png"
				imageAlt="The intro section for my personal portfolio website"
				sourceUrl="https://github.com/Vaiterius/vaiterius.github.io"
				demoUrl="https://vaiterius.github.io/"
			/>
		</div>
	);
};

export default ProjectSection;
