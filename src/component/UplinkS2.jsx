import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';

const LinkS2 = () => {
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
            <Typography variant="h1">เกณฑ์การยื่นโครงงานพิเศษ 2 (ปริญญานิพนธ์)
                <Typography variant="subtitle1">เกณฑ์การประเมิน
                    <Typography variant="body1">นักศึกษาโครงการพิเศษสองภาษาต้องลงทะเบียนเรียน 040613142 Special Project II <br />
                        นักศึกษาโครงการพิเศษสองภาษาต้องแนบสำเนาหนังสือรับรองการทดสอบโครงงานพิเศษ CSB-04
                    </Typography>
                </Typography>
                <Typography variant="subtitle2">Upload Link ผลการลงทะเบียน<br />
                    <TextField label="Link ผลการลงทะเบียน" variant="outlined" />
                </Typography>
                <Typography variant="subtitle3">Upload Link สำเนาหนังสือรับรองการทดสอบโครงงานพิเศษ<br />
                    <TextField label="Link สำเนาหนังสือรับรองการทดสอบโครงงานพิเศษ" variant="outlined" />
                    
                </Typography><br/>
                
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    ส่ง Link
                </Button>
            </Typography>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>ทำการบันทึกสำเร็จ !!</DialogTitle>
                <DialogContent>
                    <p>รอการตรวจสอบจากเจ้าหน้าที่</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LinkS2;

