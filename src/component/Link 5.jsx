import React from 'react';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { Stack } from '@mui/system';

const LinkS5 = () => {
    const handleButtonClick = () => {
        // เมื่อคลิกที่ปุ่ม "ส่ง Link"
        // ทำสิ่งที่ต้องการเมื่อคลิกที่ปุ่มส่ง Link ที่นี่
    };
    const [openDialog, setOpenDialog] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any action with the linkValue, such as redirecting to the provided link
        // For example: window.location.href = linkValue;
        setOpenDialog(true);
    };

    // Function to handle closing the dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Typography variant="h1">แนบลิงค์ 5 บท
                <Typography variant="subtitle1">แนบลิงค์ 5 บท
                    <Typography variant="body1">นักศึกษาโครงการพิเศษสองภาษาต้องส่ง 5 บท <br />
                    <TextField label="Link 5 บท" variant="outlined" />
                    </Typography>
                </Typography>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        fontSize='18px'
                        sx={{
                            marginTop: 5,
                        }}
                    >
                        <Button variant="contained" onClick={handleSubmit}>
                            ส่ง Link
                        </Button>
                    </Stack>
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>ทำการบันทึกสำเร็จ !!</DialogTitle>
                    <DialogContent>
                        <p>รอการตรวจสอบจากเจ้าหน้าที่</p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Typography>
        </div>
    );
};

export default LinkS5;