import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  if (isSent) {
    return <h1>Message has been send</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage();
      }}
    >
      <textarea
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <p>
        <button>sent</button>
      </p>
    </form>
  );
}

function sendMessage() {
  return alert("Message is on its way");
}
