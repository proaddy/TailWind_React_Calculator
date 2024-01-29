const buttons = [
    "AC",
    "DEL",
    "/",
    "1",
    "2",
    "3",
    "*",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
    "=",
];

export default function Buttons({onClick}) {
    const layout = buttons.map((button) => (
        button === "AC" || button ==="=" ? (
            <button key={button} onClick={()=>onClick(button)} className="h-20 w-auto bg-white col-span-2 hover:bg-slate-400 focus:outline-none">{button}</button>
        ) : (
            <button key={button} onClick={()=>onClick(button)} className="h-20 w-auto bg-white hover:bg-slate-400 outline-1 outline-pink-700">{button}</button>
        )
    ));

    return <div className="grid grid-cols-4 gap-1 w-80 bg-slate-300">{layout}</div>;
}
