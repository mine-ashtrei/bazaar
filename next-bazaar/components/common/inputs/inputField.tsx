import { ClassNameProp } from "../types";
import React from "react";

type InputFieldType = "email" | "text" | "password";

const typeMapping: Record<InputFieldType, string> = {
  email: "email",
  text: "text",
  password: "password",
};

type InputFieldProps = {
  id?: string;
  label: string;
  placeholder?: string;
  inputType?: InputFieldType;
} & ClassNameProp;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { id, label, inputType = "text", className = "", placeholder = "" },
    ref
  ) => {
    return (
      <div className={className}>
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <input
          type={typeMapping[inputType]}
          id={id}
          ref={ref}
          className="bg-gray-50 border border-gray-300 text-gray-900 
                  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;

// export default function InputField({
//   id,
//   label,
//   inputType = "text",
//   className = "",
//   placeholder = "",
//   ref,
// }: InputFieldProps) {
//   return (
//     <div className={className}>
//       <label
//         htmlFor={id}
//         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//       >
//         {label}
//       </label>
//       <input
//         type={typeMapping[inputType]}
//         id={id}
//         ref={ref}
//         className="bg-gray-50 border border-gray-300 text-gray-900
//                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
//                 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
//                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         placeholder={placeholder}
//         required
//       />
//     </div>
//   );
// }
