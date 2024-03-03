import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function UploadLinkTranscript() {
  // State to hold the value of the link
  const [linkValue, setLinkValue] = useState('');

  // Function to handle changes in the text field
  const handleLinkChange = (e) => {
    setLinkValue(e.target.value);
  };

  // Function to handle submission of the form (you can customize this according to your needs)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the linkValue, such as redirecting to the provided link
    // For example: window.location.href = linkValue;
    console.log("Submitted link:", linkValue);
  };

  return (
    <Container>
      <h1>ตรวจสอบคุณสมบัติยื่นโครงงาน</h1>
      <p>นักศึกษาโครงการพิเศษสองภาษาต้องลงทะเบียนเรียนวิชา 040613141 Special Project I <br></br>
        ได้ผลการเรียนรวม ≥ 102 หน่วยกิต และได้ผลการเรียนรายวิชาภาคฯ 0406xxxxx ≥ 57 หน่วยกิต <br></br>
        โดยใช้เอกสารใบรับรองผลการศึกษา (Transcript)</p>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <form onSubmit={handleSubmit}>
          {/* Text Field for Link */}
          <Typography>
            อัปโหลดลิงค์
          </Typography>
          <TextField
            label="Link"
            value={linkValue}
            onChange={handleLinkChange}
            variant="outlined"
            margin="3"
            placeholder="Enter the link..."
          />
          <br />
          <Button variant="contained" type="submit" >Submit</Button>
        </form>
      </Box>
    </Container>
  );
}

export default UploadLinkTranscript;
