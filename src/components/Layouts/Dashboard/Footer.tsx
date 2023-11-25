import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer clearfix mb-0 text-muted">
                <div className="float-start">
                    <p>2023 &copy; Atma Dev</p>
                </div>
                <div className="float-end">
                    <p>Crafted with <span className="text-danger"><i className="bi bi-heart-fill icon-mid"></i></span>
                        by <a href="https://saugi.me">Saugi</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;