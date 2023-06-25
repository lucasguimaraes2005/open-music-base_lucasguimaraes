/* Desenvolva sua lógica aqui ... */


export const renderDarkMode = () => {
    const darkModeButton = document.querySelector('#headerDarkModeButton')
    const html = document.querySelector('html')
    const theme = JSON.parse(localStorage.getItem('darkMode'))

    if(theme) {
        darkModeButton.innerText = 'Ligth Mode'
        html.classList.add('dark__mode')
    } else {
        darkModeButton.innerText = 'Dark Mode'
        html.classList.remove('dark__mode')
    }
    
    
    darkModeButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')) {
            darkModeButton.innerText = 'Ligth Mode'
            localStorage.setItem('darkMode', true)
        } else {
            darkModeButton.innerText = 'Dark Mode'
            localStorage.setItem('darkMode', false)
        }
    })
}