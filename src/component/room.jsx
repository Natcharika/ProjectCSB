import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function ExamRoom() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [numExaminers, setNumExaminers] = useState(0);
  const [selectedExaminers, setSelectedExaminers] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    console.log('Selected date:', selectedDate);
    console.log('Number of examiners:', numExaminers);
    console.log('Selected examiners:', selectedExaminers);
    // เพิ่มโค้ดสำหรับการบันทึกข้อมูลที่นี่
  };

  const handleNumExaminersChange = (event) => {
    const num = parseInt(event.target.value);
    setNumExaminers(num);
    setSelectedExaminers(Array(num).fill('')); // Reset selected examiners when changing the number
  };

  const handleSelectedExaminerChange = (index, event) => {
    const newSelectedExaminers = [...selectedExaminers];
    newSelectedExaminers[index] = event.target.value;
    setSelectedExaminers(newSelectedExaminers);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 200, margin: '8px' }}>
        <InputLabel>รหัสการสอบ</InputLabel>
        <Select>
          <MenuItem value={1}>รหัสการสอบ 1</MenuItem>
          <MenuItem value={2}>รหัสการสอบ 2</MenuItem>
          <MenuItem value={3}>รหัสการสอบ 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 200, margin: '8px' }}>
        <InputLabel>ห้องสอบ</InputLabel>
        <Select>
          <MenuItem value={1}>ห้องสอบ 1</MenuItem>
          <MenuItem value={2}>ห้องสอบ 2</MenuItem>
          <MenuItem value={3}>ห้องสอบ 3</MenuItem>
          <MenuItem value={4}>ห้องสอบ 4</MenuItem>
          <MenuItem value={5}>ห้องสอบ 5</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 200, margin: '8px' }}>
        <TextField
          type="number"
          label="จำนวนกรรมการสอบ"
          value={numExaminers}
          onChange={handleNumExaminersChange}
        />
      </FormControl>
      {Array.from({ length: numExaminers }, (_, index) => (
        <FormControl key={index} sx={{ minWidth: 200, margin: '8px' }}>
          <InputLabel>{`กรรมการสอบที่ ${index + 1}`}</InputLabel>
          <Select value={selectedExaminers[index] || ''} onChange={(event) => handleSelectedExaminerChange(index, event)}>
            {[...Array(numExaminers)].map((_, i) => (
              <MenuItem key={i} value={`Examiner ${i + 1}`}>{`Examiner ${i + 1}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ margin: '8px' }}>
        บันทึกข้อมูล
      </Button>
    </div>
  );
}

export default ExamRoom;
