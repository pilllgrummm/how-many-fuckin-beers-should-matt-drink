function calculateBeers() {
    const beers = Math.floor(Math.random() * 15) + 2;
    document.getElementById("result").innerText = `Matt should drink like ${beers} fuckin' beers.`;
}