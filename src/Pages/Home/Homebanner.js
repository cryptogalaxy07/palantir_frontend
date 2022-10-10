import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/images/Logo.svg";
import { ReactComponent as SearchSvg } from "../../assets/images/Search.svg";
export const Homebanner = () => {
    return (
        <div className="bannerContainer">
            <header role="banner" className="bannerLogoContainer">
                <div className="LogoBackground">
                    <Link
                        to="/"
                        className="Logo"
                        arial-label="Link to Palantir homepage"
                        id="logo"
                        data-axe="reviewed"
                    >
                        <LogoSvg />
                    </Link>
                </div>
            </header>
            <div className="bannerButtonContainer">
                <div className="buttonGroup">
                    <div className="primaryButtonWrapper">
                        <Link
                            to="#"
                            className="GetStartButton"
                            aria-controls="drawer"
                        >
                            <span className="GetStartLeftButton">↖</span>
                            Get Started
                        </Link>
                    </div>
                    <div className="secondaryButtonsWrapper">
                        <button
                            aria-expanded="false"
                            className="searchButton"
                            id="searchBtn"
                            title="Show Search"
                        >
                            <SearchSvg />
                        </button>
                        <button aria-expanded="false" className="navButton" id="navBtn" title="Show Navigation">
                            <div className="hamburger hamburger--emphatic">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
