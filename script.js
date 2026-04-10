const apiUrl = "https://api.green-api.com";

// универсальный вывод
function showResponse(data) {
    document.querySelector(".response-box").innerText =
        JSON.stringify(data, null, 2);
}

// получение данных
function getCredentials() {
    const idInstance = document.getElementById("idInstance").value;
    const apiToken = document.getElementById("apiToken").value;

    if (!idInstance || !apiToken) {
        alert("Заполни idInstance и ApiToken");
        return null;
    }

    return { idInstance, apiToken };
}

//
// 🔹 1. getSettings (GET)
//
document.getElementById("getSettingsBtn").onclick = async () => {
    const creds = getCredentials();
    if (!creds) return;

    const { idInstance, apiToken } = creds;

    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiToken}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        showResponse(data);
    } catch (e) {
        showResponse("Ошибка запроса");
        console.error(e);
    }
};

//
// 🔹 2. getStateInstance (GET)
//
document.getElementById("getStateBtn").onclick = async () => {
    const creds = getCredentials();
    if (!creds) return;

    const { idInstance, apiToken } = creds;

    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiToken}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        showResponse(data);
    } catch (e) {
        showResponse("Ошибка запроса");
        console.error(e);
    }
};

//
// 🔹 3. sendMessage (POST)
//
document.getElementById("sendMessageBtn").onclick = async () => {
    const creds = getCredentials();
    if (!creds) return;

    const { idInstance, apiToken } = creds;

    const phone = document.getElementById("phoneMessage").value;
    const message = document.getElementById("messageText").value;

    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiToken}`;

    const body = {
        chatId: `${phone}@c.us`,
        message: message
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        showResponse(data);
    } catch (e) {
        showResponse("Ошибка запроса");
        console.error(e);
    }
};

//
// 🔹 4. sendFileByUrl (POST)
//
document.getElementById("sendFileBtn").onclick = async () => {
    const creds = getCredentials();
    if (!creds) return;

    const { idInstance, apiToken } = creds;

    const phone = document.getElementById("phoneFile").value;
    const fileUrl = document.getElementById("fileUrl").value;

    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiToken}`;

    const body = {
        chatId: `${phone}@c.us`,
        urlFile: fileUrl,
        fileName: "file"
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await res.json();
        showResponse(data);
    } catch (e) {
        showResponse("Ошибка запроса");
        console.error(e);
    }
};