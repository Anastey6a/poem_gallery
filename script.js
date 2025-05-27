document.addEventListener('DOMContentLoaded', () => {
    // Фільтрація віршів
    const filterButtons = document.querySelectorAll('.filter-btn-styled');
    const poemCards = document.querySelectorAll('.poem-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

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

    // Встановлюємо "Усі" активною за замовчуванням
    filterButtons[0].classList.add('active');

    // Модальне вікно
    const modal = document.getElementById('poem-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');
    const readMoreLinks = document.querySelectorAll('.read-more');

    // Дані віршів із повними текстами
    const poems = {
        'full-poem-1': {
            title: 'Без нього',
            author: ' Дарія Митчик',
            text: 'Певна,ви читали про кохання \nЯк оспівуюють його в піснях Але ж знову таки \nЧому саме кохання робить крила усім нам?\nПідіймає до небес,оживляє душі\n\nКрутить нами,як йому завгодно\nІ приносить біль,так само ж швидко й різко,наче блискавка у саме серце влучить\nІ ніякої екзотики тепер,лише \nсірість,біль,рутина…\nІ як би боляче тоді тобі би не було\n Подивись на ліво,там сім‘я,робота,друзі,дім\nТвоє життя,однак без нього.\nТепер я певна,ви.. читали про кохання.'
        },
        'full-poem-2': {
            title: 'Залишив',
            author: ' Дарія Митчик',
            text: `залишив\nзалишив,та й пішов\n одну,оголену й таку дурну\n йшов та не озирався\n хм мабуть,боявся\n з кожним кроком,ламав її,ламав\nнищив та випалював\n але поглянути, у вічі все ж не зміг\n повів себе як те дитя,стурбоване про майбуття\n залишив попіл,та й на цьому все\n залишив,щоб зрозуміла,як це буть щасливою`
        },
        'full-poem-3': {
            title: 'Душі',
            author: ' Дарія Митчик',
            text: `і душі відлетіли у неокрайне небо\nу те,де шукали хмари\nде світить сонце й бавить \nде все без гріху,та страждань\nде біль не відчувається,як страх\nде знову можеш покохати\nі бути тим,ким боявся стати\nде темні душі,стали на бік правди\nта не зуміли передати\nсвої благання про прощення\nде вітер,відчувається як поштовх\nде серце,б‘ється як йому завгодно\nде не залежиш від думок інших\nде знову хочеш жить.`
        },
        'full-poem-4': {
            title: 'Три роки кохання... ',
            author: ' Дарія Митчик',
            text:'я кохаю щиро й до безстями\nз кожнем днем росте моє чуття\nі не знаю чи осилю те є відчуття\nзнаю лиш одне, я ,що та фраза клята і сумнане про нас написана вона\n«Кохання живе лиш три роки»\nсправді,три роки ти проживаєш щасливе життя\nдалі цикл обривається і починається нове житття\nзнову 3 роки кохання і біль,смуток,втома\nі знову боїшся ти втратить людину яку називала теплим словом\nале я продовжую жити життя,і кохати щиро й до безстями,\nале не буду цілувати я твої вуста і дивитись поглядом неокраї\nзакохують вчинки ,\n а не слова,і ці міфи про три роки загублють цілі життя'
        },
        'full-poem-5': {
            title: 'Тієї темної зими',
            author: ' Дарія Митчик',
            text:'і знову мчу додому\nвкутатись у м‘ягкий і теплий плед\nі знову хочу я відчути спокій \nякий панував тієї темної зими\nбув холод,мряка але гріло душу\nта посмішка і ті слова \nякі ти промовляв мені тієї темної зими\nтієї темної зими,я була немов новонароджене маля\nтака от ніжна,криклива і по дитячому дурна\nхотіла я лиш прочитати « люблю тебе »\nі Мріяла про руки та вуста\nкохала напевне Я ,а ти лиш говорив мені « ніякого кохання,та відносин»\nболяче було це чути,і тримати всі думки у голові\nті думки,які взірвали мозок,та не пускали більше кров туди\nтак,напевне я була дурна,закохане маля,яке крихтить від злості коли не може стримать сльози\nале ж читаєш вірш мій,саме Ти,і певна я,отримала своє «люблю'
        },
         'full-poem-6': {
            title: '29.04.2025',
            author: ' Дарія Митчик',
            text:'залиш мене,покинь\nсховай ті очі під пітьмою\nі більше не приходь,покинь\nті спогади,ті жарти,знову\nзалиш \nв спокої мене'
        },
        'full-poem-7': {
            title: 'Без назви',
            author: ' Дарія Митчик',
            text:'сміюсь сама із себе\nякою дурною тоді я була\nсміялась із жартів,робила дива\nзнаходилась поруч,і мабуть \nтоді,програла я'
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
                modalText.textContent = poem.text; // Використовуємо textContent для збереження переносів
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

    // Додаємо підтримку клавіатури для закриття модального вікна
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});