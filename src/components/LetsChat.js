"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React, { useState } from "react";
import { Button, Modal, Placeholder } from "rsuite";
import "@/components/ChatButtonStyles.css";
import Image from "next/image";

const LetsChat = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Button
          appearance="default"
          onClick={handleOpen}
          className="button"
        >Let's Chat</Button>
      </div>
      <Modal
        size={isMobile ? "full" : "xs"}
        open={open}
        onClose={handleClose}
        backdrop={true}
        style={
          isMobile ? {} : { position: "fixed", bottom: "20px", right: "20px" }
        }
      >
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph rows={isMobile ? 100 : 10} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default LetsChat;
