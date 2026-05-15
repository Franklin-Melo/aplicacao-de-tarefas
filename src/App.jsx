import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

function App() {
        return (
                <TaskProvider>
                        <Router>
                                {/* Menu de Navegação no topo */}
                                <nav
                                        style={{
                                                padding: "20px",
                                                background: "#f4f4f4",
                                                borderBottom: "1px solid #ddd",
                                                fontFamily: "sans-serif",
                                        }}
                                >
                                        <Link
                                                to="/"
                                                style={{
                                                        marginRight: "20px",
                                                        textDecoration: "none",
                                                        color: "#333",
                                                        fontWeight: "bold",
                                                }}
                                        >
                                                🏠 Home
                                        </Link>
                                        <Link
                                                to="/add-task"
                                                style={{
                                                        textDecoration: "none",
                                                        color: "#007bff",
                                                        fontWeight: "bold",
                                                }}
                                        >
                                                ➕ Adicionar Tarefa
                                        </Link>
                                </nav>

                                {/* Onde as páginas vão aparecer dependendo do clique no menu */}
                                <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route
                                                path="/add-task"
                                                element={<AddTask />}
                                        />
                                </Routes>
                        </Router>
                </TaskProvider>
        );
}

export default App;
