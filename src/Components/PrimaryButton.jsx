import React from 'react';

function PrimaryButton({ label, type }) {
  return (
    <button
      type={type}
      className="rounded-md w-[500px] h-[48px] px-6 text-white bg-[#50d170] hover:bg-[#339f59] transition cursor-pointer"
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
