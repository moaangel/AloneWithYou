import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { ReactNode } from "react";

interface CustomModalProps {
    isOpen: boolean;
    closeModal: () => void;
    children: ReactNode; 
  }

  const CustomModal: React.FC<CustomModalProps> = ({ isOpen, closeModal, children }) => {
    return (
    <Modal open={isOpen} onClose={closeModal}>
      <Paper
        elevation={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius:"10px",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 700,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
          background: "pink",
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
}

export default CustomModal;