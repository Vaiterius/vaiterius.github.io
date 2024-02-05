const ConstructionSign = () => {
	return (
		<div className="w-full bg-warning py-2 text-center">
			<p className="text-lg font-bold text-warning-content">🚧 Site under construction! 🚧</p>
			<p className="text-sm text-warning-content">
				Check out my{" "}
				<a className="font-bold hover:underline" href="https://github.com/Vaiterius">
					GitHub{" "}
				</a>
				in the meantime
			</p>
		</div>
	);
};

export default ConstructionSign;
