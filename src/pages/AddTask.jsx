import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const AddTask = () => {
        const [title, setTitle] = useState("");
        const { addTask } = useContext(TaskContext);
        const navigate = useNavigate(); // Essa função serve para nos mandar de volta para a Home

        const handleSubmit = (e) => {
                e.preventDefault();

                // Se o usuário tentar salvar em branco, o código para aqui
                if (!title.trim())
                        return alert("Por favor, digite uma tarefa!");

                addTask(title); // Envia a nova tarefa para o nosso "cérebro" (Contexto)
                navigate("/"); // Força o app a voltar para a tela inicial automaticamente
        };

        return (
                <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
                        <h1>➕ Adicionar Nova Tarefa</h1>

                        <form
                                onSubmit={handleSubmit}
                                style={{ display: "flex", gap: "10px" }}
                        >
                                <input
                                        type="text"
                                        value={title}
                                        onChange={(e) =>
                                                setTitle(e.target.value)
                                        }
                                        placeholder="O que você precisa fazer?"
                                        style={{
                                                padding: "8px",
                                                width: "250px",
                                                borderRadius: "4px",
                                                border: "1px solid #ccc",
                                        }}
                                />
                                <button
                                        type="submit"
                                        style={{
                                                backgroundColor: "#007bff",
                                                color: "white",
                                                border: "none",
                                                padding: "8px 15px",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                        }}
                                >
                                        Salvar
                                </button>
                        </form>
                </div>
        );
};

export default AddTask;
