'use strict';

// Simply Bank App

const account1 = {
  userName: 'Cecil Ireland',
  transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
  interest: 1.5,
  pin: 1111,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2022-11-25T07:43:59.331Z',
    '2022-11-27T15:21:20.814Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account2 = {
  userName: 'Amani Salt',
  transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
  interest: 1.3,
  pin: 2222,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'UAH',
  locale: 'uk-UA',
};

const account3 = {
  userName: 'Corey Martinez',
  transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
  interest: 0.8,
  pin: 3333,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
    '2021-03-09T11:42:26.371Z',
    '2021-05-21T07:43:59.331Z',
    '2021-06-22T15:21:20.814Z',
  ],
  currency: 'RUB',
  locale: 'ru-RU',
};

const account4 = {
  userName: 'Kamile Searle',
  transactions: [530, 1300, 500, 40, 190],
  interest: 1,
  pin: 4444,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'CAD',
  locale: 'fr-CA',
};

const account5 = {
  userName: 'Oliver Avila',
  transactions: [630, 800, 300, 50, 120],
  interest: 1.1,
  pin: 5555,
  transactionsDates: [
    '2020-10-02T14:43:31.074Z',
    '2020-10-29T11:24:19.761Z',
    '2020-11-15T10:45:23.907Z',
    '2021-01-22T12:17:46.255Z',
    '2021-02-12T15:14:06.486Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.total__value--in');
const labelSumOut = document.querySelector('.total__value--out');
const labelSumInterest = document.querySelector('.total__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// console.log(containerTransactions.innerHTML);

// ГЕНЕРИРУЕМ НИКНЕЙМЫ
const userName = 'Oliver Avila'; // nickname = 'oa'
const nickname = userName
  .toLowerCase() //делаем все буквы маленькими
  .split(' ') // разделяем по пробелу на 2 элемента
  .map(word => word[0]) // берем каждый эелемент и возвращаем 1ую букву
  .join(''); // соеденяем в одну строку, получаем 'oa'

// console.log(nickname);

// BAD PRACTICE
// используем метод forEach так как хотим модифицировать исходный массив, а не создавать новый. C помощью этой функции добавляем в каждый объект новое свойство nikname со значением первая буква имени и фамилии в нижнем регистре
const createNicknames = function (accs) {
  accs.forEach(function (acc) {
    acc.nickname = acc.userName
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createNicknames(accounts);
// console.log(accounts);

//////////////////////////////////////////////////////////////////////////
// Если нам не нужно изменять исходный массив, используем map()
// передаем в функцию массив из аккаунтов
// const createNicknames = function (accs) {
//   // применяем метод map() к каждому аккаунту
//   return accs.map(account => {
//     // возвращаем из метода map() новый объект
//     return {
//       ...account, // распаковываем в новый объект все свойства и значения из входящего элемента массива(элементы массива - объекты)
//       nickname: account.userName // создаем новое свойство и присваиваем ему значение
//         .toLowerCase()
//         .split(' ')
//         .map(word => word[0])
//         .join(''),
//     };
//   });
// };
// const newAccounts = createNicknames(accounts);
// console.log(newAccounts);
/////////////////////////////////////////////////////////////////////////

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//  -------------------------------ФУНКЦИИ--------------------------------------

// ФУНКЦИЯ ФОРМАТИРУЕТ ДАТУ ТРАНЗАКЦИЙ
const formatTransactionDate = function (date, locale) {
  const getPassedBetween2Days = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = getPassedBetween2Days(new Date(), date);
  if (daysPassed === 0) return 'Сегодня';
  if (daysPassed === 1) return 'Вчера';
  if (daysPassed <= 5) return `${daysPassed} дня назад`;
  else {
    // const day = `${date.getDate()}`.padStart(2, '0');
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// ФУНКЦИЯ ФОРМАТИРУЕТ ВАЛЮТУ
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// ФУНКЦИЯ ДЕЛАЕТ СПИСОК ТРАНЗАКЦИЙ
const displayTransactions = function (account, sort = false) {
  containerTransactions.innerHTML = ''; // с помощью этого свойства очищается контейнер
  // создаем переменную и если сортировка нужна, помещаем в нее копию массива отсортированную по возрастанию, если не нужна помещаем в нее исходный массив
  const transacs = sort
    ? account.transactions.slice().sort((x, y) => x - y)
    : account.transactions;
  transacs.forEach(function (trans, index) {
    // Обьявляем переменную тип транзакции депозит или вывод средств
    const transType = trans > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.transactionsDates[index]);
    const transDate = formatTransactionDate(date, account.locale);

    const formattedTrans = formatCurrency(
      trans,
      account.locale,
      account.currency
    );

    const transactionRow = `
    <div class="transactions__row">
      <div class="transactions__type transactions__type--${transType}">
        ${index + 1} ${transType}
      </div>
      <div class="transactions__date">${transDate}</div>
      <div class="transactions__value">${formattedTrans}</div>
    </div>`;
    // вставляем наш transactionRow после начала родительского элемента containerTransactions
    containerTransactions.insertAdjacentHTML('afterbegin', transactionRow); // указываем 2 параметра, 1 как мы хотим вставить элемент, 2-ой какой элемент вставлять
  });
};

// ФУНКЦИЯ ОТОБРАЖЕНИЕ БАЛАНСА
const displayBalance = function (account) {
  const balance = account.transactions.reduce((acc, trans) => acc + trans, 0);
  account.balance = balance; // помещаем в объект новое свойство баланс
  labelBalance.textContent = formatCurrency(
    balance,
    account.locale,
    account.currency
  );
};

// ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ СУММЫ ВСЕХ ПОЛУЧЕНИЙ, ВЫВОДОВ СРЕДСТВ И ПРОЦЕНТ
const displayTotal = function (account) {
  const depositTotal = account.transactions
    .filter(trans => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = formatCurrency(
    depositTotal,
    account.locale,
    account.currency
  );

  const withdrawalTotal = account.transactions
    .filter(trans => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = formatCurrency(
    withdrawalTotal,
    account.locale,
    account.currency
  );

  const interestTotal = account.transactions
    .filter(trans => trans > 0)
    .map(depos => (depos * account.interest) / 100)
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formatCurrency(
    interestTotal,
    account.locale,
    account.currency
  );
};

// ФУНКЦИЯ ОБНОВЛЕНИЯ ИНТЕРФЕЙСА
const updateUi = function (account) {
  // Display transactions
  displayTransactions(account);

  // Display balance
  displayBalance(account);

  // Display total
  displayTotal(account);
};

// ФУНКЦИЯ ТАЙМЕРА ВЫХОДА
const startLogoutTimer = function () {
  const logOutTimerCallBack = () => {
    const minutes = String(Math.trunc(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    // В каждом вызове показывать оставшееся время в UI
    labelTimer.textContent = `${minutes}:${seconds}`;

    // После истечения времени остановить таймер и выйти из приложения
    if (time === 0) {
      clearInterval(logOutTimer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Войдите в свой аккаунт';
    }
    time--;
  };
  // Установить время выхода через 5 минут
  let time = 300;
  // Вызов таймера каждую секунду
  logOutTimerCallBack();
  const logOutTimer = setInterval(logOutTimerCallBack, 1000);
  return logOutTimer;
};

///////////////////////////////////////////////////////////////////////////////////////
// ---------------------Event hendlers (слушатели событий)---------------------------

let currentAccount, currentLogOutTimer; // обьявляем переменную текущего аккаунта

// Always logged in (залогиненная страница для работы с приложением)
// currentAccount = account1;
// updateUi(currentAccount);
// containerApp.style.opacity = 100;

// ИМПЛЕМЕНТАЦИЯ ЛОГИНА
// в формах обработчик события срабатывает при нажатии клавиши enter
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // метод предотвращает отправку формы, и страница не будет перезагружаться
  // находим аккаунт пользователя
  currentAccount = accounts.find(
    account => account.nickname === inputLoginUsername.value // ищем по никнейму
  );
  console.log(currentAccount);
  // обращаемся к свойству pin только если аккаун существует
  if (currentAccount?.pin === +inputLoginPin.value) {
    // + - Number
    // Display UI and welcome message
    containerApp.style.opacity = 100; // показываем UI
    labelWelcome.textContent = `Рады что вы снова с нами, ${
      currentAccount.userName.split(' ')[0]
    }!`;
    // const now = new Date(); // каждый раз будет создаваться переменная с текущей датой
    // const day = `${now.getDate()}`.padStart(2, '0'); // добавляем падинг в начало, если 1 цифра добавляем 0
    // const month = `${now.getMonth() + 1}`.padStart(2, '0'); // тк месяцы начинаются с 0 прибавляем 1
    // const year = now.getFullYear();
    // labelDate.textContent = `${day}/${month}/${year}`;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', // 'long', 'numeric', 2-digit
      year: 'numeric',
      weekday: 'long',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear inputs
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur(); // убираем фокус курсора из поля pin

    // Check if the timer exists
    if (currentLogOutTimer) clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogoutTimer();

    updateUi(currentAccount); // обновляем интерфейс
  }
});

// ИМПЛЕМЕНТАЦИЯ ПЕРЕВОДА СРЕДСТВ
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // предотвращаем отправку формы
  const transferAmount = +inputTransferAmount.value;
  const recipientUser = inputTransferTo.value;
  const recipientAccount = accounts.find(
    account => account.nickname === recipientUser // находим счет пользователя-получателя
  );
  inputTransferTo.value = ''; // очищаем поле получателя
  inputTransferAmount.value = ''; // очищаем поле суммы трансфера
  // проверяем перевод
  if (
    transferAmount && // проверяем существует ли аккаунт получателя
    transferAmount > 0 && // сумма должна быть больше 0
    currentAccount.balance >= transferAmount && // баланс отправителя должен быть больше или равен сумме трансфера
    currentAccount.nickname !== recipientAccount?.nickname // при этом условии нельзя отправить самому себе
  ) {
    // Add transaction
    currentAccount.transactions.push(-transferAmount);
    recipientAccount.transactions.push(transferAmount);
    // Add transaction date
    currentAccount.transactionsDates.push(new Date().toISOString());
    recipientAccount.transactionsDates.push(new Date().toISOString());
    updateUi(currentAccount);

    // Reset the timer
    clearInterval(currentLogOutTimer);
    currentLogOutTimer = startLogoutTimer();
  }
});

// ИМПЛЕМЕНТАЦИЯ ЗАКРЫТИЯ СЧЕТА
btnClose.addEventListener('click', function (e) {
  e.preventDefault(); //  предотвращаем отправку формы
  if (
    currentAccount.nickname === inputCloseUsername.value && //проверяем верный ли логин
    currentAccount.pin === inputClosePin.value // проверяем верный ли пин
  ) {
    // ищем индекс текущего аккаунта в массиве аккаунтов
    const currentAccountIndex = accounts.findIndex(
      account => account.nickname === currentAccount.nickname
    );
    accounts.splice(currentAccountIndex, 1); // удаляем аккаунт из массива
    containerApp.style.opacity = 0; // скрываем UI
    labelWelcome.textContent = 'Войдите в свой аккаунт'; // меняем надпись в навигации
  }
  inputClosePin.value = ''; // очищаем поля ввода
  inputCloseUsername.value = '';
  inputLoginPin.blur(); // убираем фокус курсора из поля pin
});

// ИМПЛЕМЕНТАЦИЯ ЗАПРОСА ЗАЙМА
// условие займа:  хотя бы 1 из депозитов должен быть больше 10% от запрашиваемой суммы
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value); // получаем значение из инпута, округляем его
  if (
    loanAmount > 0 && // запрашиваемая сумма больше 0
    currentAccount.transactions.some(trans => trans >= (loanAmount * 10) / 100) // проверяем, есть ли в транзакциях пользователя хотя бы 1 депозит больше 10% от запрашиваемой суммы
  ) {
    setTimeout(function () {
      currentAccount.transactions.push(loanAmount); // добавляем депозит пользователю
      currentAccount.transactionsDates.push(new Date().toISOString());
      updateUi(currentAccount); // обновляем интерфейс
    }, 4000);
  }
  clearInterval(currentLogOutTimer);
  currentLogOutTimer = startLogoutTimer();
  inputLoanAmount.value = ''; // очищаем инпут
});

// ИМПЛЕМЕНТАЦИЯ СОРТИРОВКИ

// создаем переменную состояния, которая следит отсортирован ли список
let transactionsSorted = false;

// каждый раз при нажатии на кнопку массив будет менять состояние отсортирован - не отсортирован
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // передаем в функцию парамент тру, так как по нажатию на кнопку нужна сортировка
  displayTransactions(currentAccount, !transactionsSorted); // так как изначально значение переменной состояния false а нам нужно передать в функцию при клике true то записываем !transactionsSorted - что означает true
  transactionsSorted = !transactionsSorted; // меняем значение переменной на противоположное
});

// Array.from() example

// const logoImage = document.querySelector('.logo');
// logoImage.addEventListener('click', function () {
//   const transactionsUi = document.querySelectorAll('.transactions__value'); // выбираем все элементы на странице
//   console.log(transactionsUi);
//   // const transactionsUiArray = Array.from(transactionsUi);
//   // console.log(transactionsUiArray);
//   // console.log(transactionsUiArray.map(elem => Number(elem.textContent)));
//   const transactionsUiArray = Array.from(
//     transactionsUi, // передаем в функцию длинну масива, она будет равна колличеству элементов в transactionsUi
//     elem => +elem.textContent // элементы создаваемого массива будут взяты из textContent
//   );
//   console.log(transactionsUiArray);
// });

const logoImage = document.querySelector('.logo');
logoImage.addEventListener('click', function () {
  [...document.querySelectorAll('.transactions__row')].forEach(function (
    row,
    i
  ) {
    if (i % 3 === 0) {
      // окрашивает каждую 3-ую строку в серый цвет
      row.style.backgroundColor = 'grey';
    }
  });
});
