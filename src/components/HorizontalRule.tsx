const HorizontalRule = ({ heroStep }: { heroStep?: string }) => {
	return (
		<hr
			data-hero={heroStep}
			data-reveal={heroStep === undefined ? "heading" : undefined}
			className="my-4 hidden w-12 border-t-2 border-primary md:flex"
		/>
	);
};

export default HorizontalRule;
