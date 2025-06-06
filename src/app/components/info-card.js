import styles from "../resources/style/info-card.scss";

import MailIcon from "../resources/images/mail.js";
import PhoneIcon from "../resources/images/phone.js";
import LocationIcon from "../resources/images/location.js";
import LinkedInIcon from '../resources/images/linkedin.js';
import GitHubIcon from "../resources/images/github.js";

export default function InfoCard() {
    return (
        <div id="info-card" className="slide-in left">
            <div id="info-card-title">
                <img
                    src="/headshot.jpg"
                    alt="Will Mazerolle"
                    className="headshot-image"
                />
                <h2>Will Mazerolle</h2>
                <span>Software Developer</span>
            </div>
            <ul id="info-card-contact">
                <li>
                    <MailIcon />
                    <div className="contact-text">
                        <h3>Email</h3>
                        <a href="mailto:willmazerolle@gmail.com">willmazerolle@gmail.com</a>
                    </div>
                </li>
                <li>
                    <PhoneIcon />
                    <div className="contact-text">
                        <h3>Phone</h3>
                        <a href="tel:1-506-962-7653">+1 (506) 962-7653</a>
                    </div>
                </li>
                <li>
                    <LocationIcon />
                    <div className="contact-text">
                        <h3>Location</h3>
                        <a href="https://www.google.com/maps/place/Fredericton,+NB/" target="_blank">Fredericton, NB, Canada</a>
                    </div>
                </li>
            </ul>
            <div id="info-card-quicklinks">
            <a href="https://www.linkedin.com/in/william-mazerolle-a76a98170" target="_blank">
                <LinkedInIcon className="icon"/>
            </a>
            <a href="https://github.com/WilMaz00602" target="_blank">
                <GitHubIcon className="icon"/>
            </a>
            </div>
        </div>
    )
}