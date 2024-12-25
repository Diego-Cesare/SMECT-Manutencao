import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/Main.css";

function Message({ selectedItem }) {
    return selectedItem === "VAZIO" ? (
        <div className="Notice">
            <h1>{selectedItem}</h1>
            <p>Por favor, selecione um item no menu anterior</p>
        </div>
    ) : (
        <div className="Notice">
            <h1>{selectedItem}</h1>
            <p>Liste apenas itens relacionados à {selectedItem}</p>
        </div>
    );
}

function ValidateButton({ selectedItem }) {
    return selectedItem === "VAZIO" ? (
        <button disabled>Enviar</button>
    ) : (
        <button type="submit">Enviar</button>
    );
}

function Main() {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedItem } = location.state || { selectedItem: "VAZIO" };

    const handlePrevClick = () => {
        navigate("/");
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID,
                process.env.REACT_APP_EMAIL_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAIL_PUBLIC_KEY
            )
            .then(
                () =>
                    alert(
                        "Seu pedido foi enviado com sucesso! Em breve, uma equipe irá até sua unidade."
                    ),
                () =>
                    alert(
                        "No momento, não é possível enviar seu pedido. Aguarde alguns instantes e tente novamente."
                    )
            );

        e.target.reset();
    };

    return (
        <div className="Main">
            <form onSubmit={sendEmail}>
                <Message selectedItem={selectedItem} />
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
                            <input id="phone" type="tel" name="Telefone" required />
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
                    <button type="button" onClick={handlePrevClick}>
                        Voltar
                    </button>
                    <ValidateButton selectedItem={selectedItem} />
                </div>
            </form>
        </div>
    );
}

export default Main;
