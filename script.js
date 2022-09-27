const numberAdvice = document.querySelector('[data-quote-number]')
const advice = document.querySelector('[data-quote]')
const btn = document.querySelector('.icon-dice')

const url = 'https://api.adviceslip.com/advice'

const loadQuote = () => {fetch(url)
  .then(response => {
    return response.json()
  })
  .then(response => {
    numberAdvice.innerText = response.slip.id
    advice.innerText = response.slip.advice
  })
}

loadQuote()

btn.addEventListener('click', loadQuote)