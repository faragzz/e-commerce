export default function TestPage() {
  return (
    <div className="flex flex-col justify-between">
      <div className="mt-10 flex flex-row  justify-between">
        <button className="rounded-xl bg-yellow-100 px-8 py-2 hover:bg-white">
          done
        </button>
        <input
          className="border-s-3 rounded-md px-2 "
          placeholder="Faragz Top"
          type="text"
        ></input>
      </div>
    </div>
  );
}
