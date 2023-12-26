"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const ActionButton = ({
  title,
  path,
  buttonName,
}: {
  title: string;
  path: string;
  buttonName: string;
}) => {
  const [isTranslated, setIsTranslated] = useState<boolean>(false);

  useEffect(() => {
    if (isTranslated) {
      const timeoutId = setTimeout(() => {
        setIsTranslated(false);
      }, 75);

      return () => clearTimeout(timeoutId);
    }
  }, [isTranslated]);

  const handleClick = () => {
    setIsTranslated(true);
  };

  return (
    <Link href={path}>
      <div
        className={`rounded-xl p-5 text-2xl font-extrabold text-center cursor-pointer button-${buttonName} transform transition-transform ease-in-out ${
          isTranslated ? "translate-y-1" : ""
        }`}
        onMouseDown={handleClick}
      >
        {title}
      </div>
    </Link>
  );
};

export default ActionButton;
