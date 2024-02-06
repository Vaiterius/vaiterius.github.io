const Footer = (props: { year: number }) => {
	return (
		<footer className="footer footer-center bg-base-300">
			<aside>
				<p className="my-12">
					&copy; {props.year} Gerard Gandionco - Made with{" "}
					<a
						className="link-hover link font-bold"
						target="_blank"
						href="https://astro.build/"
					>
						{" "}
						Astro
					</a>
					<span> </span>
					<img src="/logos/astro.svg" alt="Astro logo" className="inline h-4 w-4" />
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
