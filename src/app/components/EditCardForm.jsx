import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
const EditCardForm = ({ card, updateCard, cardInEdit, showEditForm }) => {
    const [editedCard, setEditedCard] = useState(card);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateCard(editedCard);
    };

    const handleChange = (event) => {
        setEditedCard({
            ...editedCard,
            [event.target.name]: event.target.value,
        });
    };
    useEffect(() => {
        setEditedCard(card);
    }, [card]);

    return (
        <div>
            <form
                className="fixed gap-9 flex flex-col justify-normal items-center left-0 top-8  w-full h-auto box-border p-8 
            rounded-t-[56px] bg-white border border-black"
            >
                <div className="w-full  flex justify-between">
                    <h2 className="font-extrabold text-2xl w-full">
                        Edit your Card
                    </h2>
                    <button onClick={() => showEditForm(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    <Card card={cardInEdit} />
                </div>
                <div className="flex flex-col gap-7 w-full">
                    <div className="flex w-full flex-col items-start gap-1">
                        <h3 className="">Name in Card</h3>
                        <input
                            className="w-full border-b border-black"
                            placeholder="Name"
                            value={editedCard.name}
                            onChange={handleChange}
                            name="name"
                        />
                    </div>
                    <div className="flex w-full flex-col items-start gap-1">
                        <h3 className="">Card number</h3>
                        <input
                            className="w-full border-b border-black"
                            placeholder="1234 5678 1234 5678"
                            value={editedCard.cardNumber}
                            onChange={handleChange}
                            name="cardNumber"
                        />
                    </div>
                    <div className="flex w-full flex-col items-start gap-1">
                        <h3 className="">Expiry Date</h3>
                        <input
                            className="w-full border-b border-black"
                            placeholder="01/2024"
                            value={editedCard.expiryDate}
                            onChange={handleChange}
                            name="expiryDate"
                        />
                    </div>
                    <div className="flex w-full flex-col items-start gap-1">
                        <h3 className="">CVC (Security Code)</h3>
                        <input
                            className="w-full border-b border-black"
                            placeholder="123"
                            value={editedCard.cvc}
                            onChange={handleChange}
                            name="cvc"
                        />
                    </div>{" "}
                </div>
                <button
                    type="submit"
                    className="w-full font-bold rounded-3xl text-white box-border p-3 bg-blue-700"
                >
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default EditCardForm;
