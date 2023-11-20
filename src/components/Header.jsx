const Header = () => {
	return (
		<header className="md:container mx-auto px-6 sm:px-16">
			<nav className="navbar">
				{/* Hamburger dropdown menu */}
				<div className="dropdown">
					<label className="btn btn-ghost md:hidden" tabIndex={0} htmlFor="#">
						{/* Hamburger icon */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					{/* Dropdown menu items */}
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="#intro">Home</a>
						</li>
						<li>
							<a href="#background">Background</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				{/* Expanded links */}
				<div className="hidden md:flex">
					<ul className="menu menu-horizontal gap-4">
						<li>
							<a href="#intro">Home</a>
						</li>
						<li>
							<a href="#background">Background</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="/blog">Blog</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
