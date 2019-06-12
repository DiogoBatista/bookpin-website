import React from "react";

interface SubtitleProps {
  text: string;
}

export const SubTitle = ({ text }: SubtitleProps) => (
  <h2 className="subtitle is-5 is-bold">{text}</h2>
);
