const Header = ({ navItemStyle }) => {
    return (
        <header>
            <nav className="navbar fixed top-0 flex flex-row flex-grow justify-end">
                <div className={navItemStyle}><a href="#intro">Home</a></div>
                <div className={navItemStyle}><a href="#background">Background</a></div>
                <div className={navItemStyle}><a href="#projects">Projects</a></div>
                <div className={navItemStyle}><a href="/blog">Blog</a></div>
                <div className={navItemStyle}><a href="#contact">Contact</a></div>
            </nav>
        </header>
    );
}

export default Header;