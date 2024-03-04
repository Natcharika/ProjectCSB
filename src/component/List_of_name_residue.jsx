import React, { useState } from 'react';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const List_of_name_residue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // ข้อมูลนักศึกษา CSB ที่ตกค้าง
  const students = [
    { id: 1, code: '12345', name: 'John Doe', status: 'ไม่สำเร็จโปรเจค 1', link: 'http://example.com/document1' },
    { id: 2, code: '67890', name: 'Jane Smith', status: 'ไม่สำเร็จโปรเจค 2', link: 'http://example.com/document2' },
    // เพิ่มข้อมูลนักศึกษาเพิ่มเติมตามต้องการ
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = students.filter(student => {
    const searchString = searchTerm.trim().toLowerCase();
    return (
      student.code.toLowerCase().includes(searchString) ||
      student.name.toLowerCase().includes(searchString) ||
      student.status.toLowerCase().includes(searchString)
    );
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>รายชื่อนักศึกษา CSB ที่ตกค้าง</h2>
      <TextField
        label="ค้นหา"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ลำดับ</TableCell>
              <TableCell>รหัสนักศึกษา</TableCell>
              <TableCell>ชื่อ นามสกุล</TableCell>
              <TableCell>สถานะโครงงาน</TableCell>
              <TableCell>ลิงค์</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.code}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell><a href={student.link} target="_blank" rel="noopener noreferrer">ดูเอกสาร</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List_of_name_residue;
