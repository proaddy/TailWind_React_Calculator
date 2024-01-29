export default function Output({current, previous}) {
    return (
        <div className="bg-black bg-opacity-50 text-right w-80 h-28 relative p-3">
            <div className="absolute inset-x-0 bottom-14 text-slate-400 font-bold text-xl my-1 mx-3">{previous}</div>
            <div className="absolute inset-x-0 bottom-0 text-white font-bold text-3xl my-3 mx-3">{current}</div>
        </div>
    );
}
