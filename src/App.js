import { useState } from "react";
import "./style.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(5);
  const [friendTip, setFriendTip] = useState(5);
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service Tip={myTip} setTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service Tip={friendTip} setTip={setFriendTip}>
        How did your friend like the service?
      </Service>
      <Tip bill={bill} myTip={myTip} friendTip={friendTip} />
      <Reset
        bill={bill}
        setBill={setBill}
        setMyTip={setMyTip}
        setFriendTip={setFriendTip}
      />
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="input"
        value={bill}
        onChange={(e) => setBill((s) => Number(e.target.value))}
      />
    </div>
  );
}

function Service({ Tip, setTip, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={Tip}
        onChange={(e) => setTip((s) => Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Tip({ bill, myTip, friendTip }) {
  const totalTip = (bill * ((myTip + friendTip) / 2)) / 100;
  const totalBill = bill + totalTip;
  return (
    <div>
      {bill !== 0 && (
        <h2>
          You pay ${totalBill} (${bill} + ${totalTip} tip)
        </h2>
      )}
    </div>
  );
}

function Reset({ bill, setBill, setMyTip, setFriendTip }) {
  function handleReset() {
    setBill((s) => 0);
    setMyTip((s) => 5);
    setFriendTip((s) => 5);
  }
  return (
    <div>{bill !== 0 && <button onClick={handleReset}>Reset</button>}</div>
  );
}
