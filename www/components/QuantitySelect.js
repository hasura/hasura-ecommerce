import * as React from "react";
import styles from "../styles/quantity-select.module.css";

import useOnClickOutside from "../hooks/useOnClickOutside";

const Quantity = ({
  children = [1, 2, 3, 4],
  label = "Qty: ",
  onChange,
  selected = 1,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const list = React.useRef();
  useOnClickOutside(list, () => setMenuOpen(false));

  const handleSelect = (value) => {
    onChange(value);
    setMenuOpen(false);
  };

  const data = React.Children.map(children, (child) => {
    if (typeof child !== Object) {
      return { value: child, label: child };
    }
    return child;
  });

  return (
    <div className={styles.form}>
      <div
        className={styles.label}
        onClick={() => setMenuOpen((state) => !state)}
      >
        {label} {selected}
        <ion-icon name="chevron-down-outline" />
      </div>
      {menuOpen && (
        <dl ref={list} className={styles.select}>
          {data.map((el, index) => (
            <dt key={index} onClick={() => handleSelect(el.value)}>
              {el.label}
            </dt>
          ))}
        </dl>
      )}
    </div>
  );
};

export default Quantity;
