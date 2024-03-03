import React, { useState } from 'react';

const UploadLinkPage = () => {
  const [link, setLink] = useState('');

  const handleUploadLink = () => {
    // ทำการบันทึกลิงค์
    alert('บันทึกลิงค์สำเร็จ รอการตรวจสอบ');
    // ส่วนของการบันทึกลิงค์ลงในระบบอาจต้องเขียนเพิ่มเติม
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <div>
      <h1>Upload Link</h1>
      <input type="text" value={link} onChange={handleLinkChange} placeholder="กรุณาใส่ลิงค์ที่นี่" />
      <button onClick={handleUploadLink}>บันทึกลิงค์</button>
    </div>
  );
};

export default UploadLinkPage;
