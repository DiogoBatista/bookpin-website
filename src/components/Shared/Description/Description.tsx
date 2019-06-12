import React, { useState } from "react";
import './_description.scss';

interface DescriptionProps {
  description: string;
  classNames?: string;
}

interface TextToggleProps {
  handleOnClick(): void;
  show: boolean;
}

const TextToggle = ({ handleOnClick, show }: TextToggleProps) => {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a className="toggle" onClick={handleOnClick}>({!show ? "more" : "less"})</a>
  )
}
export const Description = ({ description, classNames }: DescriptionProps) => {
  const [show, setShow] = useState(false);

  const toggleDescription = () => {
    setShow(!show);
  };

  const handleDescription = (description: string) => {
    return (
      <>
        <p className="description">
          {!show ? description.substr(0, 300) + "..." : description}
          {" "}
          <TextToggle handleOnClick={toggleDescription} show={show} />
        </p>

      </>
    );
  };
  return (
    <div className={classNames}>
      {description ? handleDescription(description) : "No description provided"}
    </div>
  );
};
