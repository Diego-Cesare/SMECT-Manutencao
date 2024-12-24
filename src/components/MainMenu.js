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

function createLink(icon, name, isActive, onClick) {
    return (
        <a href="#" className={`menuItem ${isActive ? "active" : ""}`} onClick={onClick}>{icon} {name}</a>
    );
}

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
                <h1>Selecione o tipo de manutenção</h1>
                <nav>
                    {createLink(
                        <PiLampPendantDuotone className="Icon" />,
                        "Elétrica",
                        activeItem === "Elétrica",
                        () => handleClick("Elétrica")
                    )}
                    {createLink(
                        <PiShowerDuotone className="Icon" />,
                        "Hidraulica",
                        activeItem === "Hidraulica",
                        () => handleClick("Hidraulica")
                    )}
                    {createLink(
                        <PiHammerDuotone className="Icon" />,
                        "Carpintaria",
                        activeItem === "Carpintaria",
                        () => handleClick("Carpintaria")
                    )}
                    {createLink(
                        <PiHouseLineDuotone className="Icon" />,
                        "Alvenaria",
                        activeItem === "Alvenaria",
                        () => handleClick("Alvenaria")
                    )}
                    {createLink(
                        <PiToiletDuotone className="Icon" />,
                        "Esgoto",
                        activeItem === "Esgoto",
                        () => handleClick("Esgoto")
                    )}
                    {createLink(
                        <PiSnowflakeDuotone className="Icon" />,
                        "Ar-Condicionado",
                        activeItem === "Ar-Condicionado",
                        () => handleClick("Ar-Condicionado")
                    )}

                    {createLink(
                        <PiTruckTrailerDuotone className="Icon" />,
                        "Transporte",
                        activeItem === "Transporte",
                        () => handleClick("Transporte")
                    )}
                    {createLink(
                        <PiWarningCircleDuotone className="Icon" />,
                        "Outros",
                        activeItem === "Outros",
                        () => handleClick("Outros")
                    )}
                </nav>
                <button onClick={handleNextClick}>
                    <PiArrowCircleRightDuotone className="Icon" /> Proximo
                </button>
            </div>
        </div>
    )
}

export default MainMenu