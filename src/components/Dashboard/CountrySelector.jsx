import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CountryDropdown from "../UI/CountryDropdown";
import { Plus } from "lucide-react";

const PhoneNumberList = () => {
    const [phones, setPhones] = useState([
        { number: "+247764648464", country: "AC" }
    ]);

    const [newPhone, setNewPhone] = useState(null);
    const [newCountry, setNewCountry] = useState("US");

    const handleAddClick = () => {
        if (newPhone && newPhone.trim()) {
            setPhones([...phones, { number: newPhone, country: newCountry }]);
            setNewPhone(null);
            setNewCountry("US");
        }
    };

    const handleRemove = (index) => {
        const updated = [...phones];
        updated.splice(index, 1);
        setPhones(updated);
    };

    const updateCountry = (index, newCountry) => {
        const updated = [...phones];
        updated[index].country = newCountry;
        setPhones(updated);
    };

    return (
        <div className="max-w-lg">
            <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium">Phone Number</label>
                {newPhone === null && (
                    <button
                        onClick={() => setNewPhone("")}
                        className="text-purple-600 hover:text-purple-800"
                    >
                        <Plus size={20} strokeWidth={1.5} className="text-[#513CCE]" />
                    </button>
                )}
            </div>

            {/* Existing Phone Numbers */}
            {phones.map((phone, index) => (
                <div key={index} className="flex items-center gap-2 mb-3">
                    <CountryDropdown
                        selected={phone.country}
                        setSelected={(country) => updateCountry(index, country)}
                        disabled={true}
                    />
                    <PhoneInput
                        value={phone.number}
                        readOnly
                        disabled
                        className="w-[164px] h-9 rounded-xl border border-[#0E253C4D] px-2 dark:bg-[#001121]"
                    />
                    <button
                        onClick={() => handleRemove(index)}
                        className="px-3 w-[78px] h-[38px] bg-white dark:bg-gray-800 border border-[#DC3545] rounded-xl text-[#DC3545]"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Add New Phone */}
            {newPhone !== null && (
                <div className="flex items-center gap-2 mb-3">
                    <CountryDropdown
                        selected={newCountry}
                        setSelected={setNewCountry}
                    />
                    <PhoneInput
                        international
                        defaultCountry={newCountry}
                        countryCallingCodeEditable={false}
                        value={newPhone}
                        onChange={setNewPhone}
                        className="w-[164px] h-9 rounded-xl border border-[#0E253C4D] px-2"
                    />
                    <button
                        onClick={handleAddClick}
                        className="px-3 w-[78px] h-[38px] bg-white dark:bg-gray-800 border border-[#DC3545] rounded-xl text-[#DC3545]"
                    >
                        Add
                    </button>
                </div>
            )}
        </div>
    );
};

export default PhoneNumberList;
