import Image from "next/image";
import React from "react";
import Mastercard from "../assets/mastercard-logo.svg";
import Visa from "../assets/visa-logo.svg";
import edit from "../assets/edit.svg";

const Card = ({ card, setCardInEdit, editForm, showEditForm }) => {
    const handleEditClick = () => {
        setCardInEdit(card);
    };
    return (
        <div className="box-border flex flex-col gap-3 p-4">
            <div
                key={card.id}
                className={`h-56 background-shape box-border min-w-72 max-w-96 max-h-56 flex flex-col justify-between p-4 rounded-2xl ${
                    card.type === "MasterCard" ? "bg-purple-700" : "bg-cyan-500"
                }
            } `}
            >
                <div className="flex justify-between">
                    {card.type === "Visa" ? (
                        <Image src={Visa} alt="Visa" width={50} height={50} />
                    ) : (
                        card.type === "MasterCard" && (
                            <Image
                                src={Mastercard}
                                alt="MasterCard"
                                width={50}
                                height={50}
                            />
                        )
                    )}

                    <div className="flex gap-3">
                        <div>
                            <h6 className="text-gray-200  ">CVC</h6>
                            <h5 className="text-end font-extrabold  text-white">
                                {card.cvc}{" "}
                            </h5>
                        </div>
                        <div>
                            <h6 className="text-gray-200">Expires</h6>
                            <h5 className="text-end text-white font-extrabold">
                                {card.expiryDate}{" "}
                            </h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-extrabold">{card.name} </h3>
                    <div className="flex justify-between">
                        <h4
                            className={`${
                                card.type === "MasterCard"
                                    ? "text-white"
                                    : "text-black"
                            }`}
                        >
                            {card.cardNumber}{" "}
                        </h4>
                        <button
                            onClick={() => {
                                handleEditClick();
                                showEditForm(true);
                            }}
                        >
                            <Image width={16} height={16} src={edit} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
