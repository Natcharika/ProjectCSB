import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';

function ExamRoom() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = () => {
    console.log('Selected date:', selectedDate);
    // เพิ่มโค้ดสำหรับการบันทึกข้อมูลที่นี่
  };

  const options = ['ผศ.ดร.อัครา ประโยชน์', 'ผศ.ดร.ลือพล พิพานเมฆาภรณ์', 'รศ.ดร.ธนภัทร์ อนุศาสน์อมรกุล', 'อาจารย์ ปรัชญาพร เลี้ยงสุทธิสกนธ์', 'ผศ.ดร.สุวัจชัย กมลสันติโรจน์',
    'ผศ.ดร.คันธา รัตน์อเนกบุณย์', 'ผศ.ดร.นิกร สุทธิเสงี่ยม', 'รศ.ดร.กฤดาภัทร สีหารี', 'รศ.ดร.กอบเกียรติ สระอุบล', 'รศ.ดร.ปรวัฒน์ วิสูตรศักดิ์', 'รศ.ดร.เบญจพร ลิ้มธรรมาภรณ์',
    'ผศ.ดร.เฉียบวุฒิ รัตนวิไลสกุล', 'ผศ.สถิตย์ ประสมพันธ์', 'อาจารย์ เอิญ สุริยะฉาย', 'อาจารย์ ณัฐวุฒิ สร้อยดอกสน', 'อาจารย์ อนุสรณ์ วงษ์สนิท', 'ดร.สรร รัตนสัญญา',
    'ดร.ธรรศฏภณ สุระศักดิ์', 'ดร.ณัฐกิตติ์ จิตรเอื้อตระกูล', 'ผศ.ดร.อภิสิทธิ์ รัตนาตรานุรักษ์'];
  const options1 = ['ประธานสอบ', 'กรรมการสอบ']
  const options2 = ['โครงงาน 1', 'โครงงาน 2', 'โครงงาน 3', 'โครงงาน 4', 'โครงงาน 5']

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [value1, setValue1] = React.useState(options1[0]);
  const [inputValue1, setInputValue1] = React.useState('');

  const [value2, setValue2] = React.useState(options2[0]);
  const [inputValue2, setInputValue2] = React.useState('');

  const timeSlots = Array.from(new Array(24 * 2)).map(
    (_, index) =>`${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${ index % 2 === 0 ? '00' : '00' }`,
  )

  return (
    <div>
      <FormControl sx={{ minWidth: 200, margin: '8px' }}>
        <InputLabel>รหัสการสอบ</InputLabel>
        <Select>
          <MenuItem value={1}>CSB01 : สอบหัวข้อ</MenuItem>
          <MenuItem value={2}>CSB02 : สอบป้องกัน</MenuItem>
          <MenuItem value={3}>CSB03 : สอบก้าวหน้า</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 200, margin: '8px' }}>
        <InputLabel>ห้องสอบ</InputLabel>
        <Select>
          <MenuItem value={1}>617</MenuItem>
          <MenuItem value={2}>618/1 </MenuItem>
          <MenuItem value={3}>618/2</MenuItem>
          <MenuItem value={4}>619</MenuItem>
          <MenuItem value={5}>621</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider>
      </FormControl>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="กรรมการสอบ" />}
      />
      <Autocomplete
        value={value1}
        onChange={(event, newValue) => {
          setValue1(newValue);
        }}
        inputValue={inputValue1}
        onInputChange={(event, newInputValue) => {
          setInputValue1(newInputValue);
        }}
        id="controllable-states-demo"
        options={options1}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="ตำแหน่ง" />}
      />
      <Autocomplete
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
        inputValue={inputValue2}
        onInputChange={(event, newInputValue) => {
          setInputValue2(newInputValue);
        }}
        id="controllable-states-demo"
        options={options2}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="โครงงาน..." />}
      />

<Autocomplete
      id="disabled-options-demo"
      options={timeSlots}
      getOptionDisabled={(option) =>
        option === timeSlots[0] || option === timeSlots[2]
      }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="เวลาสอบ" />}
    />

      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ margin: '8px' }}>
        บันทึกข้อมูล
      </Button>
    </div>
  );
}

export default ExamRoom;
