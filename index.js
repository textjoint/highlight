console.log("up and running");
let input = document.getElementById('linkInput');
async function onInput(event) {
    const value = input.value;
    console.log("new value:", value);
    let url = value; //validate url
    let response = await fetch(url, { mode: 'cors', });
    console.log(response.status, response.statusText);
    const reader = response.body.getReader();
}
input.addEventListener("input", onInput);
//# sourceMappingURL=index.js.map