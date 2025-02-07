import React, { FC } from "react";
import styles from "./Burger.module.scss";

interface IBurger {
  open: boolean;
  onClick: () => void;
}

export const Burger: FC<IBurger> = ({ open, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.burger} ${open ? styles.active : ""} `}
      aria-label="otworz menu"
    >
      <div />
      <div />
      <div />
    </button>
  );
};
