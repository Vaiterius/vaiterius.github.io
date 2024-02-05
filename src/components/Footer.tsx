const Footer = (props: { year: number }) => {
	return (
		<footer className="footer footer-center bg-base-300">
			<aside>
				<p className="my-12">&copy; {props.year} Gerard Gandionco - All rights reserved.</p>
			</aside>
		</footer>
	);
};

export default Footer;
