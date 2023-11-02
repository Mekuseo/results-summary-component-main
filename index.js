fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const scoreContainer = document.getElementById('score-container');
    
    data.forEach(item => {
      const scoreCard = document.createElement('div');
      scoreCard.className = 'score-card ' + item.category.toLowerCase() + 'Background';
      
      const cardContent = `
        <div>
          <img src="${item.icon}" alt="${item.category}-icon" />
          <p class="${item.category.toLowerCase()}">${item.category}</p>
        </div>
        <div>
          <p class="scorePoints"><span>${item.score}</span>/100</p>
        </div>
      `;
      scoreCard.innerHTML = cardContent;
      scoreContainer.appendChild(scoreCard);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
