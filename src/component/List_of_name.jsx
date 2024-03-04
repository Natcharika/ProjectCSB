import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function List_of_name() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>รายชื่อนักศึกษา CSB</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ลำดับ</TableCell>
              <TableCell>รหัสนักศึกษา</TableCell>
              <TableCell>ชื่อ นามสกุล</TableCell>
              <TableCell>สถานะโครงงาน</TableCell>
              <TableCell>รายละเอียดเพิ่มเติม</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* สร้างแถวตามจำนวนข้อมูล */}
            <TableRow>
              {/* สร้างเซลล์ในแต่ละแถว */}
              <TableCell>1</TableCell>
              <TableCell>6X0406XXXXXXX</TableCell>
              <TableCell>นาย ก</TableCell>
              <TableCell>กำลังดำเนิน</TableCell>
              <TableCell>click</TableCell>
            </TableRow>
            <TableRow>
              {/* สร้างเซลล์ในแต่ละแถว */}
              <TableCell>2</TableCell>
              <TableCell>6X0406XXXXXXX</TableCell>
              <TableCell>นางสาว ข</TableCell>
              <TableCell>สำเร็จ</TableCell>
              <TableCell>click</TableCell>
            </TableRow>
            <TableRow>
              {/* สร้างเซลล์ในแต่ละแถว */}
              <TableCell>3</TableCell>
              <TableCell>6X0406XXXXXXX</TableCell>
              <TableCell>นางสาว จ</TableCell>
              <TableCell>ไม่สำเร็จ</TableCell>
              <TableCell>click</TableCell>
            </TableRow>
            {/* เพิ่มแถวเพิ่มเติมตามจำนวนข้อมูลอื่นๆ */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List_of_name;
