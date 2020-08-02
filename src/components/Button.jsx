import React from "react";

import classNames from "classnames";

const Button = ({clicked, children, outline, className}) => {
    return (
      <button
          className={classNames('button', className, {'button--outline': outline})}
          onClick={clicked}
      >
          {children}
      </button>
    );
}

export default Button;