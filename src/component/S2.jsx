import React from 'react';
import { Typography } from '@mui/material';
import { Button, Grid } from '@mui/material';

const TestSpecial2 = () => {
    var Project = 'ชื่อโครงงาน'
    var name_student = 'ชื่อสมาชิก'
    var name_T = 'ชื่ออาจารย์'

    const handleRejectClick = () => {
        // เมื่อคลิกที่ปุ่ม "ปฏิเสธ"
        // ทำสิ่งที่ต้องการเมื่อคลิกที่ปุ่มปฏิเสธที่นี่
    };

    const handleAcceptClick = () => {
        // เมื่อคลิกที่ปุ่ม "ยินยอม"
        // ทำสิ่งที่ต้องการเมื่อคลิกที่ปุ่มยินยอมที่นี่
    };
    return (
        <div>
            <Typography variant="h1">การยื่นป้องกัน โครงงานพิเศษ 2
                <Typography variant="subtitle1">แบบฟอร์มยินยอมสอบป้องกันโครงงานพิเศษโครงการพิเศษ (สองภาษา) <br />ภาควิชาวิทยาการคอมพิวเตอร์และสารสนเทศ <br />คณะวิทยาศาสตร์ประยุกต์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ<br />
                    ข้าพเจ้ายินยอมสอบป้องกัน {Project}<br />{name_student}<br />โดยมีอาจารย์ที่ปรึกษา {name_T}
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button variant="contained" color="error" onClick={handleRejectClick}>
                                ปฏิเสธ
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="success" onClick={handleAcceptClick}>
                                ยินยอม
                            </Button>
                        </Grid>
                    </Grid>
                </Typography>
            </Typography>
        </div>
    );
};

export default TestSpecial2;