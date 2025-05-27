document.addEventListener('DOMContentLoaded', () => {
    // Фільтрація віршів
    const filterButtons = document.querySelectorAll('.filter-btn');
    const poemCards = document.querySelectorAll('.poem-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            poemCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Модальне вікно
    const modal = document.getElementById('poem-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');
    const readMoreLinks = document.querySelectorAll('.read-more');

    // Приклад даних віршів (можна замінити на JSON або API)
    const poems = {
        'full-poem-1': {
            title: 'Сяйво кохання',
            author: 'Дарія Коваленко',
            text: `  У серці тихо палає вогонь, <br />
                        Певна,ви читали про кохання <br/>
                        Як оспівуюють його в піснях<br/>
                        Але ж знову таки<br/>
                 Чому саме кохання робить крила усім нам?<br />
               Підіймає до небес,оживляє душі<br />
               Крутить нами,як йому завгодно<br />
               І приносить біль,так само ж швидко й різко,наче блискавка у саме серце влучить<br /><br />
               І ніякої екзотики тепер,лише <br />
               сірість,біль,рутина…<br /><br />
               І як би боляче тоді тобі би не було<br />
               Подивись на ліво,там сім‘я,робота,друзі,дім<br />
               Твоє життя,однак без нього.<br /><br />
               Тепер я певна,ви.. читали про кохання.`
        },
        'full-poem-2': {
            title: 'Лісова тиша',
            author: 'Дарія Коваленко',
            text: `Ліс співає, вітер гілки гойдає,<br />
                   Тиша серце ніжно обіймає.<br />
                   Листя шепіт, струмка тихий спів,<br />
                   Природа дарує нам вічний мотив.`
        },
        'full-poem-3': {
            title: 'Ехо вічності',
            author: 'Дарія Коваленко',
            text: `Що є час? Лиш мить у вічності,<br />
                   Думки пливуть у безмежності.<br />
                   У серці правда, у слові — душа,<br />
                   Поезія вічна, як зоря ясна.`
        }
    };

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const poemId = link.getAttribute('data-poem');
            const poem = poems[poemId];

            if (poem) {
                modalTitle.textContent = poem.title;
                modalAuthor.textContent = `Автор: ${poem.author}`;
                modalText.innerHTML = poem.text;
                modal.style.display = 'block';
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});