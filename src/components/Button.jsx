const Button = ({ text, className, url, newTab }) => {
	return (
		<a target={newTab && "_blank"} href={url}>
			<button className={className}>{text}</button>
		</a>
	);
};

export default Button;
