const series = {
  'digital circus': {
    firstRun: 2023,
    eps: [
      'HwAPLk_sQ3w',
      'FkXhKu80CWU',
      '4ofJpOEXrZs',
      'bKjfw77cxeQ',
    ]
  },
  'murder drones': {
    firstRun: 2021,
    lastRun: 2024,
    eps: [
      'mImFz8mkaHo',
      '7z8DO1KhPFo',
      'djsJqNAGMuY',
      '63bUBEIhpNk',
      'rk0HBqSqpgg',
      'U7i6fi3z9Nk',
      'EOqw86OGIB0',
      'caR9ouipm8o'
    ]
  },
  'sunset paradise': {
    firstRun: 2021,
    lastRun: 2021,
    eps: [
      'TSq8zPvUkk8',
      'mTNTLw3L0HY',
      '9cG4VhdT910',
      'AQI18GkFLMA',
      'g2-ifzCq7l8',
      'niAlS1BbogA',
      'wpFy71zuArE',
      'OFSMFcbVdg4',
      'TFicGrFJqPE',
      'EHHndeRB_SE',
      'd7bbzeSTCzA',
    ]
  },
  'meta runner': {
    firstRun: 2020,
    lastRun: 2020,
    eps: [
      'HmKcvlLxGqo',
      'jKDT-tjFXYg',
      'BcIkhY9wxIQ',
      'CcLMnDZnZe4',
      'uL0gpJ3qV54',
      'hTAoYaJemjg',
      'aSsnKMIxH5c',
      'JGBRPIf9ZLQ',
      'tL3ADgleryQ',
      'K8DIws9IV1o',
      'PBd5Z_o-BXg',
      'F_i4C-lvs8k',
      'bwwpG72W4xk',
      '2-1G8JUWoG8',
      'z0ZcpkTf9P8',
      'Q7a-yvQQ_PU',
      'SuFX8zb5iUE',
      '6Z9Nkz-57Es',
      'x8lQLgGLy64',
    ]
  }
}

const videosConteiner = document.querySelectorAll('article.videos > aside');

class Popup{
  constructor(){
    this.elem = document.querySelector('div.popup');
    this.btnClose = this.elem.querySelector('div > span');
    this.iframe = this.elem.querySelector('div > iframe');
    this.init();
  }

  init(){
    this.btnClose.addEventListener('click', this.close.bind(this));
    this.elem.addEventListener('click', this.close.bind(this));
  }

  open(idVideo){
    this.elem.style.visibility = 'visible';
    this.iframe.src = 'https://www.youtube.com/embed/'+idVideo;
  }

  close(){
    this.elem.style.visibility = 'hidden';
    this.iframe.src = '';
  }
}

const popup = new Popup();

videosConteiner.forEach((vc) => {
  const serie = series[vc.id];

  function createHeading(){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = vc.id;
    div.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = `${serie.firstRun} - ${serie.lastRun?? '???'}`;
    div.appendChild(p);
    
    return div;
  }

  vc.appendChild(createHeading());
  vc.appendChild(document.createElement('nav'));

  serie.eps.forEach((ep) => {
    const img = document.createElement('img');
    img.addEventListener('click', () => popup.open(ep));
    img.src = `https://img.youtube.com/vi/${ep}/maxresdefault.jpg`;
    vc.querySelector('nav').appendChild(img);
  });
})

