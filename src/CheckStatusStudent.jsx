import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

function CheckStatusStudent() {
  // Sample data for the table
  const data = [
    { id: 1, name: 'ตรวจสอบคุณสมบัติการยื่นสอบโครงงานพิเศษ 1', status: 'ผ่าน' },
    { id: 2, name: 'คำร้องขอเป็นคู่โครงงาน', status: 'ผ่าน' },
    { id: 3, name: 'คำร้องขอเป็นอาจารย์ที่ปรึกษาโครงงาน', status: 'ผ่าน' },
    { id: 4, name: 'การสอบหัวข้อ', status: 'ผ่าน' },
    { id: 5, name: 'การสอบก้าวหน้า', status: 'กำลังดำเนินการ' },
    { id: 6, name: 'ตรวจสอบคุณสมบัติการยื่นสอบโครงงานพิเศษ 2', status: 'ยังไม่มีการทำรายการ' },
    { id: 6, name: 'การสอบป้องกัน', status: 'ยังไม่มีการทำรายการ' },
    // Add more data as needed
  ];

  return (
    <div>
      <h1>ตรวจสอบสถานะต่างๆ</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ลำดับที่</TableCell>
              <TableCell>รายการ</TableCell>
              <TableCell>สถานะ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map through data to render table rows */}
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CheckStatusStudent;
