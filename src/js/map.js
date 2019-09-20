'use strict';

const settings = {
  src:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.2935568332846!2d25.59044531573671!3d49.554483979361805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDMzJzE2LjEiTiAyNcKwMzUnMzMuNSJF!5e0!3m2!1suk!2sus!4v1568989809713!5m2!1suk!2sus',
  width: '100%',
  frameborder: '0',
  style: 'border:0;',
};
const insertMap = ({ src, width, frameborder, style }) => {
  const mapSect = document.getElementById('mapSection');
  const mapHeight = parseInt(window.outerHeight * 0.75);
  const mapElement = document.createElement('iframe');

  mapElement.setAttribute('src', src);
  mapElement.setAttribute('width', width);
  mapElement.setAttribute('height', mapHeight.toString());
  mapElement.setAttribute('frameborder', frameborder);
  mapElement.setAttribute('style', style);

  mapSect.appendChild(mapElement);
};

insertMap(settings);
