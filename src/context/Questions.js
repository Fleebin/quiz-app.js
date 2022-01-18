import React, { createContext, useState, useContext } from "react";

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {

    const [quest, setQuest] = useState(0)

    return (
        <QuestionsContext.Provider value={{
            quest,
            setQuest
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => {
    const context = useContext(QuestionsContext);
    if (!context) throw new Error("useCount must be used within a CountProvider");
    const { quest, setQuest } = context;
    return { quest, setQuest }
}