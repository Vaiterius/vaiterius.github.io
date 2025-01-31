import Button from "../Button";
import HorizontalRule from "../HorizontalRule";

const Intro = () => {
	return (
		<div className="w-full lg:w-8/12">
			<div>
				{/* <Fade> */}
				<p className="text-primary">Hey, my name is...</p>
				<h1 className="mb-2 text-6xl font-bold md:mb-0">Gerard Gandionco</h1>
				{/* </Fade> */}
			</div>
			<HorizontalRule />
			<p>
				I'm an aspiring <span className="font-bold text-primary">full-stack developer</span>
				, committed to merging solid technical skills across both{" "}
				<span className="font-bold text-secondary">front-end</span> and{" "}
				<span className="font-bold text-secondary">back-end</span> technologies. Proficient
				in <span className="font-bold text-accent">Python</span> and{" "}
				<span className="font-bold text-accent">TypeScript</span>, I'm passionate about
				creating interesting projects in my free time using an array of different
				technologies.
			</p>
			<div className="my-4 space-x-4">
				<Button
					url="#contact"
					className="btn btn-outline"
					text="Get in touch"
					newTab={false}
				/>
				<Button
					url="https://gerard-gandionco-resume.tiiny.site"
					className="btn btn-outline btn-info"
					text="My resume"
					newTab={true}
				/>
			</div>
		</div>
	);
};

export default Intro;
