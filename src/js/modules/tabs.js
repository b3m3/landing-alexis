const tabs = () => {
  const tabs = document.querySelectorAll('.card-team');
  const contents = document.querySelectorAll('.info-team__item');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      const wrapp = document.querySelector('.info-team');
      const removeClass = elem => 
        elem.forEach(item => item.classList.remove('active'));

      removeClass(tabs);
      removeClass(contents);
 
      tab.classList.add('active');
      contents[i].classList.add('active');
      wrapp.scrollIntoView({block: "start"});
    });
  });
};

export default tabs;