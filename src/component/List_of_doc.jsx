import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const List_of_doc = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>เอกสารที่ยังไม่ได้ตรวจสอบ</h2>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ลำดับ</TableCell>
              <TableCell>รหัสนักศึกษา</TableCell>
              <TableCell>ชื่อ นามสกุล</TableCell>
              <TableCell>ชื่อเอกสาร</TableCell>
              <TableCell>ลิงค์</TableCell>
              <TableCell>วันที่ส่ง</TableCell>
              <TableCell>เวลาที่ส่ง</TableCell>
              <TableCell>สถานะ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* ใส่ข้อมูลแต่ละแถวของตารางที่นี่ */}
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>12345</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Document 1</TableCell>
              <TableCell><a href="#">Link 1</a></TableCell>
              <TableCell>2024-03-01</TableCell>
              <TableCell>09:00</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">ผ่าน</Button>
                <Button variant="contained" color="error">ไม่ผ่าน</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>67890</TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Document 2</TableCell>
              <TableCell><a href="#">Link 2</a></TableCell>
              <TableCell>2024-03-02</TableCell>
              <TableCell>10:00</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">ผ่าน</Button>
                <Button variant="contained" color="error">ไม่ผ่าน</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List_of_doc;
