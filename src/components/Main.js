import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../styles/Main.css'

import emailjs from '@emailjs/browser';

function Main() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedItem } = location.state || { selectedItem: "VAZIO" }; // Valor padrão

    const handlePrevClick = () => {
        // Envia o item ativo para a próxima página
        navigate("/");
    };

    function validateButton() {
        if (selectedItem === "VAZIO") {
            return (
                <button disabled>Enviar</button>
            )
        } else {
            return (
                <button type='submit'>Enviar</button>
            )
        }
    }

    function Msg() {
        if (selectedItem === "VAZIO") {
            return (
                <div className="Notice">
                    <h1>Você selecionou: <span>{selectedItem}</span></h1>
                    <p>Por favor, selecione um item no menu anterior</p>
                </div>
            )
        }
        else {
            return (
                <div className="Notice">
                    <h1>Você selecionou: <span>{selectedItem}</span></h1>
                    <p>Liste apenas itens relacionados à {selectedItem}</p>
                </div>
            )
        }
    }

    function sendEmail(e) {
        e.preventDefault();

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
                {Msg()}
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
                    {validateButton()}
                </div>
            </form>
        </div>
    )
}

export default Main