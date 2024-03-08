const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

const listImages = document.querySelector('.gallery');
const buildGallery = parameter => {
  return parameter.map(image => {
    const listElement = document.createElement('li');
    listElement.classList.add('gallery-item');
    const imgElement = document.createElement('img');
    imgElement.classList.add('img-item');
    imgElement.setAttribute('src', image.url);
    imgElement.setAttribute('alt', image.alt);
    imgElement.setAttribute('width', 360);
    imgElement.setAttribute('height', 300);
    listElement.append(imgElement);
    return listElement;
  });
};
listImages.append(...buildGallery(images));
console.log(buildGallery(images));
//
//
//
//
//
//
//
//
//
//
//
//
//
// const buildListGallery = param => {
//  param.map(image => {
//     const listElement = `<li class="gallery-item">
//      <img class="img-item" src=${image.url} alt=${image.alt} width=360 >
//      </li>`;
//      listImages.insertAdjacentHTML('afterbegin', listElement);
//   });
// };

// buildListGallery(images);
