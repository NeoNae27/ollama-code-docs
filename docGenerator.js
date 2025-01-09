import { Ollama } from "ollama";
const ollama = new Ollama({ host: "http://127.0.0.1:11434" });

export function test() {}

export async function sendMessage(value) {
  console.log("I am Working");

  let message = {
    role: "user",
    content: "Create documentation for JS code: " + value,
  };
  
  let response = await ollama.chat({
    model: "llama3.2",
    messages: [message],
  });
  
  return response.message.content;
}
