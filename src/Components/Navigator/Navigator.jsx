import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from "../Navigator/Navigatos.module.css";

export default function Navigator() {
  const location = useLocation();

  const isGallery = location.pathname === "/gallery";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Replace with your target link
  };

  return (
    <div className={styles.navigator}>
      {isGallery ? (
        <div onClick={handleClick} className="btn">
          <button>Grįžti į praždią</button>
        </div>
      ) : (
        <>
          <div className={styles.conteiner}>
            <div className={styles.buttons}>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    .scrollIntoView({behavior: "smooth"})
                }
              >
                Apie Mane
              </button>
            </div>
            <div className={styles.buttons}>
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({behavior: "smooth"})
                }
              >
                Paslaugos
              </button>
            </div>
            <div className={styles.buttons}>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({behavior: "smooth"})
                }
              >
                Kontaktai
              </button>
            </div>
            <div className={styles.buttons}>
              <Link to="/gallery" className={`${styles.btn}`}>
                Galerija
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
