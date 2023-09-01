"use client";
import { Listbox } from "@headlessui/react";
import React from "react";
import Arrow from "../../public/icons/Expand_left_light.svg"; // Adjust the path accordingly
import Image from "next/image";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("EN");
  const languages = ["EN", "AR"];

  return (
    <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button
              className="
              block w-16 p-2 rounded-md bg-secondary shadow-sm 
              focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:border-secondary"
            >
              <div className="flex items-center space-x-2">
                <span>{selectedLanguage}</span>
                <div className="transform -rotate-90">
                  <div className="relative w-4 h-4">
                    <Image src={Arrow} alt="Arrow Down" fill={true} />
                  </div>
                </div>
              </div>
            </Listbox.Button>
            <Listbox.Options className="absolute mt-2 w-16 py-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {languages.map((lang) => (
                <Listbox.Option key={lang} value={lang}>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      } cursor-pointer select-none relative px-4 py-2`}
                    >
                      {lang}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
}
