import React, { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto max-w-96">{children}</div>;
};

export default Container;
