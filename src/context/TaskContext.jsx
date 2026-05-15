/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
        // Agora o useState já começa buscando as tarefas do localStorage!
        const [tasks, setTasks] = useState(() => {
                const storedTasks = localStorage.getItem("tasks");
                return storedTasks ? JSON.parse(storedTasks) : [];
        });

        // Mantemos apenas este useEffect, que salva as tarefas sempre que elas mudarem
        useEffect(() => {
                localStorage.setItem("tasks", JSON.stringify(tasks));
        }, [tasks]);

        const addTask = (title) => {
                const newTask = { id: Date.now(), title, completed: false };
                setTasks([...tasks, newTask]);
        };

        const removeTask = (id) => {
                setTasks(tasks.filter((task) => task.id !== id));
        };

        const toggleTask = (id) => {
                setTasks(
                        tasks.map((task) =>
                                task.id === id
                                        ? {
                                                  ...task,
                                                  completed: !task.completed,
                                          }
                                        : task,
                        ),
                );
        };

        return (
                <TaskContext.Provider
                        value={{ tasks, addTask, removeTask, toggleTask }}
                >
                        {children}
                </TaskContext.Provider>
        );
};
