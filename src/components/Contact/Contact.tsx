const Contact = () => {
	return (
		<div className="blurry my-4 flex w-full flex-col rounded-xl bg-base-100 p-4 md:flex-row xl:w-3/5">
			{/* Emails */}
			<div className="mb-2 mr-0 flex grow flex-col justify-center border-r-0 p-2 md:mr-6 md:border-r-2 lg:mb-0">
				<div className="mb-2 flex flex-col">
					<div className="text-sm font-bold text-primary">Personal</div>
					<div>
						<a
							target="_blank"
							className="link-hover link text-sm lg:text-xl"
							href="mailto:gerard.gandionco@gmail.com"
						>
							gerard.gandionco@gmail.com
						</a>
					</div>
				</div>
				<div className="flex flex-col md:mr-4">
					<div className="text-sm font-bold text-primary">Academic</div>
					<div>
						<a
							href="mailto:gerard-euan.gandionco.767@my.csun.edu"
							target="_blank"
							className="link-hover link text-sm lg:text-xl"
						>
							gerard-euan.gandionco.767@my.csun.edu
						</a>
					</div>
				</div>
			</div>
			{/* Social logos */}
			<div className="mr-4 flex items-center justify-center space-x-4">
				<a href="https://github.com/Vaiterius" target="_blank">
					<div className="flex h-14 w-14 items-center justify-center rounded-md bg-white p-1">
						<img className="h-11 w-11" src="/logos/github.svg" alt="GitHub logo" />
					</div>
				</a>
				<a href="https://www.linkedin.com/in/vaiterius/" target="_blank">
					<div className="h-14 w-14">
						<img className="h-14 w-14" src="/logos/linkedin.svg" alt="LinkedIn logo" />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Contact;
