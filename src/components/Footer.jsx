const Footer = ({ year }) => {
	return (
		<footer className="footer footer-center bg-base-300">
			<aside>
				<p className="my-12">&copy; {year} Gerard Gandionco - All rights reserved.</p>
			</aside>
		</footer>
	);
};

export default Footer;
