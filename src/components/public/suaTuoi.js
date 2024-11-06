import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SuaTuoi = () => {
  const [chuanBi, setChuanBi] = useState(0);
  const [ton, setTon] = useState(0);
  const [nvUong, setNvUong] = useState(0);
  const [loi, setLoi] = useState(0);
  const [lyL, setLyL] = useState(0);
  const [lyM, setLyM] = useState(0);
    const [mlSuDung, setMlSuDung] = useState(null);
    const [mlTinh, setMlTinh] = useState(null);
  const [soLuongBan, setSoLuongBan] = useState(null);
  const [thieuDu, setThieuDu] = useState(null);

    const handleCalculate = () => {
        const ton1 = 1000-ton
        //Tính số ml đã sử dụng toàn bộ 
        const mlSuDung1 = Math.round((chuanBi - ton1));
        setMlTinh(mlSuDung1)
      // Tính số ml sử dụng và làm tròn thành số nguyên
    
    const mlSuDungResult = Math.round((chuanBi - ton1) - (nvUong + loi));
    setMlSuDung(mlSuDungResult);

    // Tính số lượng bán và làm tròn thành số nguyên
    const soLuongBanResult = Math.round((lyL * 200) + (lyM * 150));
    setSoLuongBan(soLuongBanResult);

    // Tính sự chênh lệch (thiếu hay dư)
    const difference = mlSuDungResult - soLuongBanResult;
    setThieuDu(difference);
  };

  return (
    <div className="container mt-4">
      <h2>Tính Toán Sữa Tươi</h2>
      <Form>
        <Form.Group controlId="chuanBi">
          <Form.Label>Chuẩn bị (ml)</Form.Label>
          <Form.Control
            type="number"
            value={chuanBi}
            onChange={(e) => setChuanBi(parseFloat(e.target.value))}
            placeholder="Nhập số lượng chuẩn bị"
          />
        </Form.Group>

        <Form.Group controlId="ton">
          <Form.Label>Tồn (ml)</Form.Label>
          <Form.Control
            type="number"
            value={ton}
            onChange={(e) => setTon(parseFloat(e.target.value))}
            placeholder="Nhập số lượng tồn"
          />
        </Form.Group>

        <Form.Group controlId="nvUong">
          <Form.Label>NV Uống (ml)</Form.Label>
          <Form.Control
            type="number"
            value={nvUong}
            onChange={(e) => setNvUong(parseFloat(e.target.value))}
            placeholder="Nhập số lượng NV uống"
          />
        </Form.Group>

        <Form.Group controlId="loi">
          <Form.Label>Lỗi (ml)</Form.Label>
          <Form.Control
            type="number"
            value={loi}
            onChange={(e) => setLoi(parseFloat(e.target.value))}
            placeholder="Nhập số lượng lỗi"
          />
        </Form.Group>

        <Form.Group controlId="lyL">
          <Form.Label>Số ly L</Form.Label>
          <Form.Control
            type="number"
            value={lyL}
            onChange={(e) => setLyL(parseFloat(e.target.value))}
            placeholder="Nhập số ly L"
          />
        </Form.Group>

        <Form.Group controlId="lyM">
          <Form.Label>Số ly M</Form.Label>
          <Form.Control
            type="number"
            value={lyM}
            onChange={(e) => setLyM(parseFloat(e.target.value))}
            placeholder="Nhập số ly M"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleCalculate}>
          Tính Toán
        </Button>
      </Form>

      {mlSuDung !== null && soLuongBan !== null && (
        <div className="mt-4">
          <h4>Số ml sử dụng: {mlTinh}</h4>
          <h4>Số lượng bán (ly L + ly M): {soLuongBan}</h4>
          {thieuDu !== null && (
            <h4>
              {thieuDu > 0
                ? `Dư: ${Math.abs(thieuDu)} ml`
                : `Thiếu: ${Math.abs(thieuDu)} ml`}
            </h4>
          )}
        </div>
      )}
    </div>
  );
};

export default SuaTuoi;
