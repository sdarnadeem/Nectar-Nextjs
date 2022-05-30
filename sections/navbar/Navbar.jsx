import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Divider } from "@mui/material";
import AOS from "aos";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./Navbar.module.css";

function Navbar({
  features,
  contact,
  home,
  about,
  open,
  closePopup,
  setVisibleElement,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  //   document.addEventListener("mousedown", () => {
  //     setVisibleElement(false);
  //     closePopup(false);
  //   });
  return (
    <>
      <motion.div className={styles.header} data-scroll-section>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image src="/images/dating/logoo.png" alt="logo" layout="fill" />
          </div>

          {/* <h6 className={styles.headerlogo}>Nectar</h6> */}

          <img
            onClick={openMenu}
            className={styles.menu}
            src="/images/dating/menu.png"
            alt="menu"
          />

          <Menu
            id="lame-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Features</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>About</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Menu>

          <ul data-aos="fade-left" className={styles.navul}>
            <li>
              <a href="#home" onClick={() => home("home")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                // ref={featuresRef}
                // id="features"
                onClick={() => features("features")}
              >
                Features
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => about("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => contact("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div data-aos="zoom-in" className={styles.textbox}>
          <h2>
            More than <span>just swiping a photo…</span>
          </h2>
          <p>Find that special someone who really gets you</p>
          <button disabled type="button" className={styles.btn}>
            Join the Club
          </button>
        </div>
        <div className={styles.down}>
          <a href="#2" onClick={() => about("2")}>
            <img
              className={styles.downwhite}
              src="/images/datingNew/down.png"
            />
          </a>
          <a href="#2" onClick={() => about("2")}>
            <img
              className={styles.downred}
              src="/images/datingNew/downred.png"
            />
          </a>
        </div>

        {open && (
          <div className={styles.popupbg}>
            <div className={styles.popup}>
              <h4>Don’t just swipe on photos</h4>
              <h6>Nectar birds and bees, the instant way to meet people</h6>

              <div className="d-flex justify-content-center gap-3 mt-5">
                <img
                  style={{ height: "40%" }}
                  src="/images/datingNew/apple.png"
                />
                <img
                  style={{ height: "40%" }}
                  src="/images/datingNew/play.png"
                />
              </div>
              <h4>Coming Soon...</h4>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Navbar;
