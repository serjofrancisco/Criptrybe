const loggedForm = document.querySelectorAll('.logged form');
const balanceElem = document.querySelector('#balance-value');

const addFunds = () => {
  loginLogout(walletElem, loggedForm);
  const user = document.querySelector('.user-text span').id;
  const obj = JSON.parse(localStorage.getItem(user));
  balanceElem.innerHTML = obj.funds.toFixed(2);
}

const concludeAdd = () => {
  const fundsWanted = parseFloat(document.querySelector('#value-to-add').value);
  if (!fundsWanted) {
    alert('Insira um valor válido!');
    document.querySelector('#value-to-add').value = '';
    return;
  }
  const user = document.querySelector('.user-text span').id;
  const obj = JSON.parse(localStorage.getItem(user));
  let balance = obj.funds;
  balance += fundsWanted;
  obj.funds = balance;
  balanceElem.innerHTML = balance;
  document.querySelector('#value-to-add').value = '';
  localStorage.setItem(user, JSON.stringify(obj));
}

const backToHomepage = () => {
  loginLogout(loggedForm, walletElem);
}
