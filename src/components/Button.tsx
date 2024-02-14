import ReactGA from "react-ga4";

const Button = (props: { text: string; className: string; url: string; newTab: boolean }) => {
	const handleClick = () =>
		ReactGA.event({
			action: `Clicked ${props.text} on link ${props.url}`,
			category: "ButtonClick",
		});
	return (
		<a target={props.newTab ? "_blank" : undefined} href={props.url}>
			<button className={props.className} onClick={handleClick}>
				{props.text}
			</button>
		</a>
	);
};

export default Button;
