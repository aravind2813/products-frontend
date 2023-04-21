fetch("https://products-rest-production.up.railway.app/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayProducts(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayProducts(data){
    console.log(data);
  }
