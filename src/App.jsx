import clsx from "clsx";
import Hello from "./Hello"


function App() {
  const paraClasses = clsx(
    'bg-red-700',   // Tailwind background color class
    'text-inherit-500', // Tailwind text color class
    'w-700'         // Tailwind width class
  );

  return (
    <div className="bg-inherit">
      <div className="para">
        {/* Your content goes here */}
        <p className={paraClasses}>This is a paragraph with custom styles.</p>
        <Hello />
      </div>
    </div>
  )
}

export default App
