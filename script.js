async function getData() {
  const url = "https://api.chucknorris.io/jokes/categories";
  try {
    
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    const buttonsdiv = document.getElementById("buttons")
  
  for( let i= 0; i < result.length; i++) {
    result[i]
    let btn = document.createElement("button");
    btn.textContent =  result[i];
    btn.innerHTML = result[i];
    buttonsdiv.appendChild(btn); }
  } catch (error) {
    console.error(error.message);
  };
    function btn();
  } 
  getData()