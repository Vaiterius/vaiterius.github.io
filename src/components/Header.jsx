const Header = ({ navStyle }) => {
    return (
        <header>
            <nav className="navbar flex flex-row flex-grow justify-end">
                <a className={navStyle} href="/">Home</a>
                <a className={navStyle} href="#">About Me</a>
                <a className={navStyle} href="#">Projects</a>
                <a className={navStyle} href="/blog/blog-example">Blog</a>
                <a className={navStyle} href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;