import { useCallback, useState } from "react";

export const useDisclosure = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const onClose = useCallback(() => setIsOpen(false), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onToggle = useCallback(() => setIsOpen((v) => !v), []);

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
    onSetOpen: setIsOpen,
  };
};
