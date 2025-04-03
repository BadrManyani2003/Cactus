
  // Générer dynamiquement les cactus
  const cacti = [
    {
      img: "img/cactus3.jpg",
      name: "Desert Cactus",
      description: "A beautiful desert cactus that thrives in dry conditions."
    },
    {
      img: "img/cactus1.jpg",
      name: "Green Cactus",
      description: "A lush green cactus that brings life to your home."
    },
    {
      img: "img/cactus3.jpg",
      name: "Flowering Cactus",
      description: "This cactus blooms with vibrant flowers in the summer."
    },
    {
      img: "img/cactus1.jpg",
      name: "Succulent Cactus",
      description: "A small and easy-to-maintain succulent cactus."
    },
    {
      img: "img/cactus3.jpg",
      name: "Desert Cactus",
      description: "A beautiful desert cactus that thrives in dry conditions."
    },
    {
      img: "img/cactus1.jpg",
      name: "Green Cactus",
      description: "A lush green cactus that brings life to your home."
    },
    {
      img: "img/cactus3.jpg",
      name: "Flowering Cactus",
      description: "This cactus blooms with vibrant flowers in the summer."
    },
    {
      img: "img/cactus1.jpg",
      name: "Succulent Cactus",
      description: "A small and easy-to-maintain succulent cactus."
    }
  ];
  
  // Sélectionner le conteneur pour les cactus
  const shopContainer = document.getElementById("shopContainer");
  
  // Générer les cartes de cactus dynamiquement
  cacti.forEach(cactus => {
    const card = document.createElement("div");
    card.classList.add("shop__card");
  
    card.innerHTML = `
      <img src="${cactus.img}" alt="${cactus.name}">
      <h3>${cactus.name}</h3>
      <p>${cactus.description}</p>
      <button class="shop__btn">Acheter Maintenant</button>
    `;
  
    shopContainer.appendChild(card);
  });
  