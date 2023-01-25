document.querySelector('button').addEventListener('click', getFetch)

// document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`
    
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data)

        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)

        } else {
          let books = localStorage.getItem('books') + " ; " + data.title
          localStorage.setItem('books', books)
        }
        
        // document.querySelector('h2').innerText = localStorage.getItem('books')

        document.querySelector('img').src = `https://covers.openlibrary.org/b/isbn/${choice}-L.jpg`;

      
        let arrBooks = (localStorage.getItem('books')).split(" ; ")
        
        document.querySelector('ul').innerHTML = "";

        arrBooks.forEach(title => {
          // console.log(title)
          //       //create an li
          const li = document.createElement('li')
                //add text to li
          li.textContent = title
          //append the li to the ul
          document.querySelector('ul').appendChild(li);
        })


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}