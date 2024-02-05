const Button = (props: { text: string; className: string; url: string; newTab: boolean }) => {
	return (
		<a target={props.newTab ? "_blank" : undefined} href={props.url}>
			<button className={props.className}>{props.text}</button>
		</a>
	);
};

export default Button;
