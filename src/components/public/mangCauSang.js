import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MangCau = () => {
  const [chuanBi, setChuanBi] = useState(0);
  const [ton, setTon] = useState(0);
  const [nvUong, setNvUong] = useState(0);
  const [fillSan, setFillSan] = useState(0);
  const [loi, setLoi] = useState(0);
  const [daBan, setDaBan] = useState(0);
  const [ketQua, setKetQua] = useState(null);
  const [thieuDu, setThieuDu] = useState(null);

  const handleCalculate = () => {
    // Công thức tính toán
    const fillSanLy = fillSan * 180;
    const loiLy = loi * 180;
    const result1 = (chuanBi - ton)/180;
    const result = ((chuanBi - ton) - ( nvUong + fillSanLy + loiLy));
    
    // Tính giá trị so sánh (kết quả - NV Uống - ly Fill Sẵn - Lỗi)
    const comparisonResult = result / 180 ;
    // Tính toán số thiếu/dư so với số đã bán
    const difference = daBan - comparisonResult;

    // Đặt kết quả tính toán và số thiếu/dư
    setKetQua(result1);
    setThieuDu(difference);
  };

  return (
    <div className="container mt-4">
      <h2>Mãng Cầu Sáng</h2>
      <Form>
        <Form.Group controlId="chuanBi">
          <Form.Label>Chuẩn bị</Form.Label>
          <Form.Control
            type="number"
            value={chuanBi}
            onChange={(e) => setChuanBi(parseFloat(e.target.value))}
            placeholder="Nhập số lượng chuẩn bị"
          />
        </Form.Group>

        <Form.Group controlId="ton">
          <Form.Label>Tồn</Form.Label>
          <Form.Control
            type="number"
            value={ton}
            onChange={(e) => setTon(parseFloat(e.target.value))}
            placeholder="Nhập số lượng tồn"
          />
        </Form.Group>

        <Form.Group controlId="nvUong">
          <Form.Label>NV Uống</Form.Label>
          <Form.Control
            type="number"
            value={nvUong}
            onChange={(e) => setNvUong(parseFloat(e.target.value))}
            placeholder="Nhập số lượng NV uống"
          />
        </Form.Group>

        <Form.Group controlId="fillSan">
          <Form.Label>Fill sẵn (số ly)</Form.Label>
          <Form.Control
            type="number"
            value={fillSan}
            onChange={(e) => setFillSan(parseFloat(e.target.value))}
            placeholder="Nhập số lượng ly fill sẵn"
          />
        </Form.Group>

        <Form.Group controlId="loi">
          <Form.Label>Lỗi (tùy chọn)</Form.Label>
          <Form.Control
            type="number"
            value={loi}
            onChange={(e) => setLoi(parseFloat(e.target.value))}
            placeholder="Nhập số lượng lỗi (nếu có)"
          />
        </Form.Group>

        <Form.Group controlId="daBan">
          <Form.Label>Số lượng đã bán</Form.Label>
          <Form.Control
            type="number"
            value={daBan}
            onChange={(e) => setDaBan(parseFloat(e.target.value))}
            placeholder="Nhập số lượng đã bán"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleCalculate}>
          Tính Toán
        </Button>
      </Form>

      {ketQua !== null && (
        <div className="mt-4">
          <h4>Kết Quả (sau khi trừ): {ketQua.toFixed(4)}</h4>
          {thieuDu !== null && (
            <h4>
              {thieuDu > 0
                ? `Dư: ${Math.abs(thieuDu).toFixed(4)} ly`
                : `Thiếu: ${Math.abs(thieuDu).toFixed(4)} ly`}
            </h4>
          )}
        </div>
      )}
    </div>
  );
};

export default MangCau;
