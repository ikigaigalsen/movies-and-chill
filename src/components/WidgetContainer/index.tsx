import React from "react";
import styles from "./index.module.scss";

interface IWidgetContainerProps {
  title: string;
}

const WidgetContainer: React.FC<IWidgetContainerProps> = props => {
  return (
    <div className={styles.widgetContainer}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export default WidgetContainer;
