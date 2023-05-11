import { DropdownLang } from "@/components/DropdownLang/DropdownLang";
import { Flex, Modal } from "@/components/common";
import { memo } from "react";
import s from "./Header.module.scss";
import { Navigation } from "./Navigation";

type HeaderMobileModalTypes = {
  onClose: () => void;
};

export const HeaderMobileModal = memo(({ onClose }: HeaderMobileModalTypes) => {
  return (
    <Modal onClose={onClose}>
      <Flex className={s.modal} justifyContent="center" alignItems="center">
        <Flex alignItems="flex-start" gap="75px" className={s.modalContent}>
          <Navigation onClick={onClose} />
          <DropdownLang onClick={onClose} />
        </Flex>
      </Flex>
    </Modal>
  );
});
