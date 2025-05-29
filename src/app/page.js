import Image from "next/image";
import styles from "./resources/style/info-card.scss";

export default function Home() {
  return (
    <div>
      <main>
    
      </main>

      <div className="info-card">
        <div id="info-card-title">
          <h2>Will Mazerolle</h2>
          <span>Software Developer</span>
        </div>
        <hr/>
        <ul id="info-card-contact">
          <li>
            <h3>Email</h3>
            <a>willmazerolle@gmail.com</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a>+1 (506) 962-7653</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
