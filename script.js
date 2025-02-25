function calculateBeers() {
    const beers = Math.floor(Math.random() * 15) + 1;
    document.getElementById("result").innerText = `You should drink about ${beers} beers.`;
}