import { useRef, JSX } from "react";

export default function InputFocus(): JSX.Element {
  // 1. Create a ref (initially null)
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 3. Access the native DOM element via .current and focus it
    inputRef.current?.focus();
  };

  return (
    <div>
      {/* 2. Attach the ref to the JSX element */}
      <input ref={inputRef} type="text" className="input input-bordered" />
      <button onClick={handleClick} className="btn btn-primary ml-2">
        Focus Input
      </button>
    </div>
  );
}
