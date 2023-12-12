import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
export function BasicModal({ open, handleClose }: BasicModalProps) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                hideBackdrop={true}
            >
                <div className='modal-box'>
                    <button onClick={handleClose}>X</button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </div>
            </Modal>
        </div>
    );
}

export type BasicModalProps = { open: boolean, handleClose: () => void }