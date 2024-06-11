import styled from "styled-components";
import { useDialogStore } from "@/utils/store/utils.store.js";
import { useEffect } from "react";
import { useRef } from "react";

export const Dialog = () => {
  const { isOpen, title, message } = useDialogStore(store => store);
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);
  return (
    <Panel ref={dialogRef}>
      <h1>{title}</h1>
    </Panel>
  );
}

const Panel = styled.dialog`
  width: 100%;
  height: 100svh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
