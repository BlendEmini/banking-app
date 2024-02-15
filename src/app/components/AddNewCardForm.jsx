import React, { useState } from "react";

const AddNewCardForm = ({ addCardForm, setAddCardForm, addCard }) => {
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [type, setType] = useState("Visa");

    const isFormValid = () => {
        const nameRegex = /^[A-Za-z\s]+$/;
        const cardNumberRegex = /^\d{16}$/;
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        const cvcRegex = /^\d{1,4}$/;

        return (
            nameRegex.test(name) &&
            cardNumberRegex.test(cardNumber) &&
            expiryDateRegex.test(expiryDate) &&
            cvcRegex.test(cvc)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid()) {
            const newCard = {
                name,
                type,
                cardNumber,
                expiryDate,
                cvc,
            };
            addCard(newCard);
            setName("");
            setCardNumber("");
            setExpiryDate("");
            setCvc("");
            setAddCardForm(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="fixed gap-9 flex flex-col justify-normal items-center bottom-0 w-full h-[750px] box-border p-8 rounded-t-[56px] bg-white border border-black"
        >
            <div className="w-full  flex justify-between">
                <h2 className="font-extrabold text-2xl w-full">
                    Add your Card Details
                </h2>
                <button onClick={() => setAddCardForm(false)}>
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
            <div className="flex flex-col gap-7 w-full">
                <div className="flex w-full flex-col items-start gap-1">
                    <h3 className="">Name in Card</h3>
                    <input
                        className="w-full border-b border-black"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                    <h3 className="">Card number</h3>
                    <input
                        className="w-full border-b border-black"
                        placeholder="1234 5678 1234 5678"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    ></input>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                    <h3 className="">Expiry Date</h3>
                    <input
                        className="w-full border-b border-black"
                        placeholder="01/2024"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    ></input>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                    <h3 className="">CVC (Security Code)</h3>
                    <input
                        className="w-full border-b border-black"
                        placeholder="123"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button
                        type="submit"
                        disabled={!isFormValid()}
                        className={`w-full font-bold rounded-3xl text-white box-border p-3 ${
                            isFormValid() ? "bg-blue-700" : "bg-blue-300"
                        }`}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddNewCardForm;
