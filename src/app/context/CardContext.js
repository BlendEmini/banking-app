import React, { createContext, useState, useContext } from "react";

const cardsData = [
    {
        id: 1,
        type: "MasterCard",
        cardNumber: "1111 1111 1111 1111",
        name: "Blend Emini",
        expiryDate: "05/26",
        cvc: 111,
    },
    {
        id: 2,
        type: "Visa",
        cardNumber: "2222 2222 2222 2222",
        name: "Blend Emini",
        expiryDate: "06/28",
        cvc: 222,
    },
];

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({ children }) => {
    const [addCardForm, setAddCardForm] = useState(false);
    const [editForm, showEditForm] = useState(false);
    const [cards, setCards] = useState(cardsData);
    const [cardInEdit, setCardInEdit] = useState("");
    const addCard = (newCard) => {
        setCards([...cards, newCard]);
    };
    const updateCard = (updatedCard) => {
        setCards(
            cards.map((card) =>
                card.id === updatedCard.id ? updatedCard : card
            )
        );
    };

    return (
        <CardContext.Provider
            value={{
                updateCard,
                editForm,
                showEditForm,
                cards,
                addCard,
                addCardForm,
                setAddCardForm,
                cardInEdit,
                setCardInEdit,
            }}
        >
            {children}
        </CardContext.Provider>
    );
};
