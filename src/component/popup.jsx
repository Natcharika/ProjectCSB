import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = useState(false);
  var Project = 'ชื่อโครงงาน'
    var name_student1 = 'ชื่อนักศึกษาคนที่1'
    var name_student2 = 'ชื่อนักศึกษาคนที่2'
    var name_T = 'ชื่ออาจารย์'

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        บันทึกคะแนน
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">คุณแน่ใจที่จะบันทึกคะแนน</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            แบบประเมินโครงงานพิเศษ 1 (สอบก้าวหน้า) <br/>{Project}<br/>{name_student1}{name_student2}<br/>{name_T}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ยกเลิก
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
