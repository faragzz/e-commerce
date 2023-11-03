"use client";

import { ComponentProps } from "react";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitBtn = {
  chilzdren: React.ReactNode;
  className?: String;
} & ComponentProps<"button">;

export default function FormSubmitBtn({
  children,
  className,
  ...props
}: FormSubmitBtn) {
//   const { pending } = useFormStatus();

  return (
    <button className={` btn btn-primary ${className}`} >
        {/* {pending && <span className="loading loading-spinner loading-xs"/>} */}
      {children}
    </button>
  );
}
