import '../styles/MainMenu.css'
import { useState } from "react";
import { PiArrowCircleRightDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
function createLink(icon, name, isActive, onClick) {
    return (
        <a href="#" className={`menuItem ${isActive ? "active" : ""}`} onClick={onClick}>
            {icon} {name}
        </a>
    );
}

function MainMenu() {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (name) => {
        setActiveItem(name);
    };

    const handleNextClick = () => {
        navigate("/main", { state: { selectedItem: activeItem || 'Nenhuma Seleção' } });
    };

    return (
        <div className="MainMenu">
            <div className="Square"></div>
            <div className="Menu">
                <h1>Selecione o tipo de manutenção</h1>
                <nav>
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Elétrica",
                        activeItem === "Elétrica",
                        () => handleClick("Elétrica")
                    )}
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Hidraulica",
                        activeItem === "Hidraulica",
                        () => handleClick("Hidraulica")
                    )}
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Carpintaria",
                        activeItem === "Carpintaria",
                        () => handleClick("Carpintaria")
                    )}
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Alvenaria",
                        activeItem === "Alvenaria",
                        () => handleClick("Alvenaria")
                    )}
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Esgoto",
                        activeItem === "Esgoto",
                        () => handleClick("Esgoto")
                    )}
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Ar-Condicionado",
                        activeItem === "Ar-Condicionado",
                        () => handleClick("Ar-Condicionado")
                    )}

                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
                        "Transporte",
                        activeItem === "Transporte",
                        () => handleClick("Transporte")
                    )}
                    {createLink(
                        <PiArrowCircleRightDuotone className="Icon" />,
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