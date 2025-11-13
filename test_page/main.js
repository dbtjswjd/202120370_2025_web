const delay = 7500;

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

// const callbackFn = () => (window.location.href = 'https://www.naver.com');
const callbackFn = () => {
  window.location.href = 'index.html';
};

const debouncedFn = debounce(callbackFn, delay);

['pointerdown', 'pointermove', 'keydown'].forEach((event) =>
  window.addEventListener(event, debouncedFn)
);
