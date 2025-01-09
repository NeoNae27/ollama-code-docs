async function sendToOllama() {
  // Создаем константы и присваевыем им элементы inputArea и outputArea
  const inputData = document.getElementById("inputArea").value;
  const outputArea = document.getElementById("outputArea");

  // Т.к. функция async - оборачиваем все try-catch
  try {
    // При помощи fetch отправляем POST запрос на адресс /send-input
    // Тело запроса - текст из поля inputData
    const response = await fetch("/send-input", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: inputData }),
    });

    // Отправляем и ждем ответ (HTTP использует JSON формат сообщений).
    // Результат запроса присваевыем константе
    const data = await response.json();
    console.log("Success");

    // Результат записываем в outputArea
    outputArea.value = data.message;
  } catch (error) {
    console.log(error);
  }
}