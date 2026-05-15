import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Home = () => {
        // Pegamos as tarefas e as funções do nosso "cérebro" (Contexto)
        const { tasks, removeTask, toggleTask } = useContext(TaskContext);

        return (
                <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
                        <h1>📋 Minhas Tarefas</h1>

                        {/* Se não houver tarefas, mostra um texto */}
                        {tasks.length === 0 ? (
                                <p>
                                        Nenhuma tarefa pendente. Que tal
                                        adicionar uma?
                                </p>
                        ) : (
                                /* Se houver, mostra a lista na tela */
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                        {tasks.map((task) => (
                                                <li
                                                        key={task.id}
                                                        style={{
                                                                marginBottom:
                                                                        "12px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "10px",
                                                        }}
                                                >
                                                        <input
                                                                type="checkbox"
                                                                checked={
                                                                        task.completed
                                                                }
                                                                onChange={() =>
                                                                        toggleTask(
                                                                                task.id,
                                                                        )
                                                                }
                                                        />
                                                        <span
                                                                style={{
                                                                        textDecoration:
                                                                                task.completed
                                                                                        ? "line-through"
                                                                                        : "none",
                                                                }}
                                                        >
                                                                {task.title}
                                                        </span>
                                                        <button
                                                                onClick={() =>
                                                                        removeTask(
                                                                                task.id,
                                                                        )
                                                                }
                                                                style={{
                                                                        backgroundColor:
                                                                                "#ff4d4d",
                                                                        color: "white",
                                                                        border: "none",
                                                                        padding: "5px 10px",
                                                                        borderRadius:
                                                                                "4px",
                                                                        cursor: "pointer",
                                                                }}
                                                        >
                                                                Excluir
                                                        </button>
                                                </li>
                                        ))}
                                </ul>
                        )}
                </div>
        );
};

export default Home;
