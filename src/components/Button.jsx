const Button = ({ text, className, url }) => {
	return (
		<a href={url}>
			<button className={className}>{text}</button>
		</a>
	);
};

export default Button;
