function calcularNivel() {
    var nickName = document.getElementById("heroName").value;
    var heroXp = parseInt(document.getElementById("heroXP").value);
    var nivel;
  
    if (heroXp < 1000) {
      rank = "iron";
    } else if (heroXp >= 1001 && heroXp <= 2000) {
      rank = "Bronze";
    } else if (heroXp >= 2001 && heroXp <= 5000) {
      rank = "Silver";
    } else if (heroXp >= 5001 && heroXp <= 7000) {
      rank = "Gold";
    } else if (heroXp >= 7001 && heroXp <= 8000) {
      rank = "Platinum";
    } else if (heroXp >= 8001 && heroXp <= 9000) {
      rank = "Ascendant";
    } else if (heroXp >= 9001 && heroXp <= 10000) {
      rank = "Imortal";
    } else {
      rank = "Radiant";
    }
  
    document.getElementById("result").innerHTML = "The hero " + nickName + " is in the ranking of " + rank;
  }