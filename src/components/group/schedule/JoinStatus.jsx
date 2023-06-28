import React from 'react';

function showStatus(status) {
  if (status === true)
    return <p style={{ color: "green" }}>Đã tham gia</p>;
  else if (status === false)
    return <p style={{ color: "orange" }}>Vắng</p>;
  return <p style={{ color: "red" }}>Đã hủy</p>;
}
export default showStatus;