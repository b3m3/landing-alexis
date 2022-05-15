const tabs = (buttons, tabContents, tabsWrapp, scrollTo) => {
  const tabs = document.querySelectorAll(buttons, );
  const contents = document.querySelectorAll(tabContents);

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      const wrapp = document.querySelector(tabsWrapp);
      const removeClass = elem => 
        elem.forEach(item => item.classList.remove('active'));

      removeClass(tabs);
      removeClass(contents);
 
      tab.classList.add('active');
      contents[i].classList.add('active');
      wrapp.scrollIntoView({block: scrollTo});
    });
  });
};

const createDots = () => {
  const items = document.querySelectorAll('.item-testimonials');
  const dotsWrapp = document.querySelector('.testimonials__dots');
  
  items.forEach(el => {
    const span = document.createElement('span');
    dotsWrapp.append(span);
  });

  const dots = document.querySelectorAll('.testimonials__dots span');

  dots[0].classList.add('active');
};

export {tabs, createDots};

