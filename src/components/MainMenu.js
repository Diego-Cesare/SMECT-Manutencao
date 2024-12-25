import '../styles/MainMenu.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    PiLampPendantDuotone,
    PiArrowCircleRightDuotone,
    PiSnowflakeDuotone,
    PiHammerDuotone,
    PiHouseLineDuotone,
    PiShowerDuotone,
    PiTruckTrailerDuotone,
    PiWarningCircleDuotone,
    PiToiletDuotone,
} from "react-icons/pi";

const menuItems = [
    { name: "Elétrica", icon: <PiLampPendantDuotone className="Icon" /> },
    { name: "Hidraulica", icon: <PiShowerDuotone className="Icon" /> },
    { name: "Carpintaria", icon: <PiHammerDuotone className="Icon" /> },
    { name: "Alvenaria", icon: <PiHouseLineDuotone className="Icon" /> },
    { name: "Esgoto", icon: <PiToiletDuotone className="Icon" /> },
    { name: "Ar-Condicionado", icon: <PiSnowflakeDuotone className="Icon" /> },
    { name: "Transporte", icon: <PiTruckTrailerDuotone className="Icon" /> },
    { name: "Outros", icon: <PiWarningCircleDuotone className="Icon" /> },
];

function MainMenu() {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (name) => {
        setActiveItem(name);
    };

    const handleNextClick = () => {
        navigate("/main", { state: { selectedItem: activeItem || 'VAZIO' } });
    };

    return (
        <div className="MainMenu">
            <div className="Menu">
                <div className='TitleName'>
                    <h1>SMECT</h1>
                    <div className='SubTitle'>
                        <h3>Selecione o tipo de</h3>
                        <h3>manutenção</h3>
                    </div>
                </div>
                <nav>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`menuItem ${activeItem === item.name ? "active" : ""}`}
                            onClick={() => handleClick(item.name)}>
                            {item.icon} {item.name}
                        </li>
                    ))}
                </nav>
                <button onClick={handleNextClick}>
                    <PiArrowCircleRightDuotone className="Icon" /> Proximo
                </button>
            </div>
        </div>
    )
}

export default MainMenu