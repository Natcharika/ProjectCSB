import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['ผศ.ดร.อัครา ประโยชน์', 'ผศ.ดร.ลือพล พิพานเมฆาภรณ์','รศ.ดร.ธนภัทร์ อนุศาสน์อมรกุล','อาจารย์ ปรัชญาพร เลี้ยงสุทธิสกนธ์','ผศ.ดร.สุวัจชัย กมลสันติโรจน์',
                'ผศ.ดร.คันธา รัตน์อเนกบุณย์','ผศ.ดร.นิกร สุทธิเสงี่ยม','รศ.ดร.กฤดาภัทร สีหารี','รศ.ดร.กอบเกียรติ สระอุบล','รศ.ดร.ปรวัฒน์ วิสูตรศักดิ์','รศ.ดร.เบญจพร ลิ้มธรรมาภรณ์',
                'ผศ.ดร.เฉียบวุฒิ รัตนวิไลสกุล','ผศ.สถิตย์ ประสมพันธ์','อาจารย์ เอิญ สุริยะฉาย','อาจารย์ ณัฐวุฒิ สร้อยดอกสน','อาจารย์ อนุสรณ์ วงษ์สนิท','ดร.สรร รัตนสัญญา',
                'ดร.ธรรศฏภณ สุระศักดิ์','ดร.ณัฐกิตติ์ จิตรเอื้อตระกูล','ผศ.ดร.อภิสิทธิ์ รัตนาตรานุรักษ์'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
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
    </div>
  );
}