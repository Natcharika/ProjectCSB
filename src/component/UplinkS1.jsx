import React from 'react';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const LinkS2 = () => {
    const handleButtonClick = () => {
        // เมื่อคลิกที่ปุ่ม "ส่ง Link"
        // ทำสิ่งที่ต้องการเมื่อคลิกที่ปุ่มส่ง Link ที่นี่
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
                <Button variant="contained" color="primary" onClick={handleButtonClick}>
                    ส่ง Link
                </Button>
            </Typography>
        </div>
    );
};

export default LinkS2;