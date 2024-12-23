import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../styles/Main.css'

import emailjs from '@emailjs/browser';

function Main() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedItem } = location.state || { selectedItem: "Nenhuma Seleção" }; // Valor padrão

    const handlePrevClick = () => {
        // Envia o item ativo para a próxima página
        navigate("/");
    };

    function sendEmail(e) {
        e.preventDefault();

        if (selectedItem === "Nenhuma Seleção") {
            alert("Nenhum tipo de manutenção selecionado.\nVolte ao menu anterior e selecione\num tipo de manutenção.");
            return;
        }

        emailjs.sendForm(
            "service_xi26o83",
            "template_4gyqkkj",
            e.target,
            "2hKcOoKCHUYuViiaO",
        )

            .then(
                (result) => {
                    alert(
                        "Seu pedido foi enviado com sucesso!\nEm breve, uma equipe irá até sua unidade.",
                    );
                },
                (error) => {
                    alert(
                        "No momento, não é possível enviar seu pedido.\nAguarde alguns instantes\ne tente novamente.",
                    );
                },
            );
        e.target.reset();
    }

    return (
        <div className="Main">
            <div className="CircleMain"></div>
            <form onSubmit={sendEmail}>
                <h1>Você selecionou: {selectedItem}</h1>
                <div className="FormBox">
                    <div className="Name">
                        <label htmlFor="">Unidade de ensino</label>
                        <input type="text" name="Unidade-de-ensino" required />
                    </div>
                    <div className="Local">
                        <div className="YourLocal">
                            <label htmlFor="local">Endereço</label>
                            <input id="local" type="text" name="Local" required />
                        </div>
                        <div className="Phone">
                            <label htmlFor="phone">Telefone</label>
                            <input id="phone" type="text" name="Telefone" required />
                        </div>
                    </div>
                    <div className="Type">
                        <label htmlFor="">Manutenção do tipo:</label>
                        <input type="text" value={selectedItem} name="Tipo" readOnly />
                    </div>
                    <div className="Require">
                        <label htmlFor="">Adicione as manutenções</label>
                        <textarea
                            placeholder="Pule para a linha abaixo ao terminar um pedido!"
                            required
                            name="pedido"
                        ></textarea>
                    </div>
                </div>
                <div className="Buttons">
                    <button onClick={handlePrevClick}>
                        Voltar
                    </button>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Main