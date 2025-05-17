import { Listbox } from "@headlessui/react";
import usFlag from "../../assets/images/flag.png";
import acFlag from "../../assets/images/ac_flag.png";
import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const countries = [
    { code: "US", label: "US", flag: usFlag },
    { code: "AC", label: "AC", flag: acFlag },
];

export default function CountryDropdown({ selected, setSelected,disabled=false }) {
    const { theme } = useTheme();
    const current = countries.find((c) => c.code === selected);

    return (
        <Listbox value={selected} onChange={setSelected} disabled={disabled}>
            <div className="relative w-[100px]">
                <Listbox.Button className="flex items-center gap-2 w-full border border-gray-300 dark:border-[#FFFFFF4D] rounded-xl bg-white dark:bg-[#001121] text-sm p-2 text-gray-900 dark:text-white">
                    <img src={current?.flag} alt="" className="w-5 h-4" />
                    {current?.label}
                    <ChevronDown color={theme === 'light' ? '#0E253CD9' : '#fff'} width={18} />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white dark:bg-[#001121] border border-gray-300 dark:border-[#FFFFFF4D] rounded-xl shadow-md text-sm">
                    {countries.map((country) => (
                        <Listbox.Option
                            key={country.code}
                            value={country.code}
                            as={Fragment}
                        >
                            {({ active }) => (
                                <li
                                    className={`flex items-center gap-2 p-2 cursor-pointer ${
                                        active ? "bg-gray-100 dark:bg-gray-700" : ""
                                    }`}
                                >
                                    <img src={country.flag} alt="" className="w-5 h-4" />
                                    {country.label}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
}
