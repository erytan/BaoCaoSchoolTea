import React from 'react';
import { NhietDoi, MangCau, DaMe,SuaTuoi } from "../../components/public";
import './QuayTra.css';  // Đảm bảo bạn có file CSS riêng cho QuayTra (hoặc có thể viết trực tiếp trong style)

const QuayTra = () => {
    return (
        <div className="quay-tra-container">
            <div className="quay-tra-item">
                <NhietDoi />
            </div>
            <div className="quay-tra-item">
                <MangCau />
            </div>
            <div className="quay-tra-item">
                <DaMe />
            </div>
            <div className= "quay-tra-item">
            <SuaTuoi/>
            </div>
        </div>
    );
};

export default QuayTra;
