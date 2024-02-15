import React, { useState } from "react";
import Card from "./Card";
import { useCardContext } from "../context/CardContext";
import AddNewCardForm from "./AddNewCardForm";
import EditCardForm from "./EditCardForm";

const HomeComp = () => {
    const {
        editForm,
        updateCard,
        showEditForm,
        cards,
        addCard,
        addCardForm,
        setAddCardForm,
        cardInEdit,
        setCardInEdit,
    } = useCardContext();
    console.log(cardInEdit);
    return (
        <div className="flex items-center flex-col h-full  justify-center gap-3 box-border">
            <div className="flex flex-col gap-2 box-border p-5 ">
                <h2 className="text-2xl font-extrabold text-purple-800">
                    Your Cards
                </h2>
                <p className="text-xs text-gray-400">
                    Add,Edit or Delete your cards at any time{" "}
                </p>
            </div>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    cardInEdit={cardInEdit}
                    setCardInEdit={setCardInEdit}
                    card={card}
                    editForm={editForm}
                    showEditForm={showEditForm}
                />
            ))}

            <div className="flex items-center flex-col">
                {addCardForm ? (
                    <AddNewCardForm
                        addCard={addCard}
                        addCardForm={addCardForm}
                        setAddCardForm={setAddCardForm}
                    />
                ) : (
                    <button
                        onClick={() => setAddCardForm(!addCardForm)}
                        className="p-3 box-border w-36 justify-center flex align-items-center bg-purple-900 text-white rounded-3xl"
                    >
                        Add New Card
                    </button>
                )}
            </div>
            {editForm ? (
                <EditCardForm
                    editForm={editForm}
                    updateCard={updateCard}
                    showEditForm={showEditForm}
                    cardInEdit={cardInEdit}
                    card={cardInEdit}
                    setCardInEdit={setCardInEdit}
                />
            ) : null}
        </div>
    );
};

export default HomeComp;
