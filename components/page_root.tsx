import React from "react";
import styles from "../styles/PageRoot.module.css";
import Navigation from "./navigation";

export const PageRoot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className={styles["page-root"]}>
    {" "}
    <Navigation />
    {children}
  </div>
);
