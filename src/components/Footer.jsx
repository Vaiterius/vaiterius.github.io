const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <aside>
                <p className="my-6" >&copy; {year} Gerard Gandionco - All rights reserved.</p>
            </aside>
        </footer>
    );
}

export default Footer;