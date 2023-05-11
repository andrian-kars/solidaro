import { useEffectOnce } from "@/hooks";
import { HTMLAttributes, ReactNode, memo, useState } from "react";
import { createPortal } from "react-dom";

type PortalTypes = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export const Portal = memo(({ children }: PortalTypes) => {
  const [container] = useState(document.createElement("div"));

  useEffectOnce(() => {
    document.body.appendChild(container);

    return (): void => {
      document.body.removeChild(container);
    };
  });

  if (!container) {
    return null;
  }

  return createPortal(children, container);
});
