import Button from "../Button";
import HorizontalRule from "../HorizontalRule";

const Intro = () => {
	return (
		<div className="w-full lg:w-8/12">
			<div>
				{/* <Fade> */}
				<p data-hero="0" className="text-primary">Hey, my name is...</p>
				<h1 data-hero="1" className="mb-2 text-6xl font-bold md:mb-0">Gerard Gandionco</h1>
				{/* </Fade> */}
			</div>
			<HorizontalRule heroStep="2" />
			<p data-hero="3">
				I'm a <span className="font-bold text-primary">full-stack developer</span> who
				turns ideas and requirements into reliable, maintainable software. My experience
				spans <span className="font-bold text-secondary">back-end systems</span> to{" "}
				<span className="font-bold text-secondary">client-facing websites</span>, grounded
				in core engineering practice: modular design, automated testing, code review and
				clear documentation. I use modern tools, including{" "}
				<span className="font-bold text-accent">AI</span>, to work faster, while keeping a
				close eye on design and code quality.
			</p>
			<div data-hero="4" className="my-4 space-x-4">
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
