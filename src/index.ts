import { homeWrapper, featuredSection, recommendSection, shopWrapper, homeLink, shopLink, featuredLink, recommendedLink } from "./elements.ts";
import { eyeWears } from "./db.ts";

function renderItems(type: string, quantity: number) {
    let startIdx = 0;
    if (type === 'recommend') {
        startIdx = 9;
        quantity += 9
    }


    const fragment = document.createDocumentFragment();

    for (let i = startIdx; i < quantity; i++) {
        let item = eyeWears[i];
        let container = document.createElement('div');
        container.className = 'border shadow-md bg-white rounded-lg';

        let img = document.createElement('img');
        img.className = 'bg-[#f0efef] w-full';
        img.src = item.img;

        let text = document.createElement('div');
        text.className = 'p-4'

        let title = document.createElement('h3');
        title.className = 'font-medium text-2xl';
        title.textContent = item.name;

        let brand = document.createElement('p');
        brand.className = "text-gray-500";
        brand.textContent = item.brand;

        text.append(title, brand);
        container.append(img, text);

        fragment.append(container);
    }

    return fragment;
}

featuredSection.replaceChildren(renderItems('featured', 6))
recommendSection.replaceChildren(renderItems('recommend', 6))

shopLink.addEventListener('click', () => {
    if (shopLink.classList.contains('active-page')) return;
    homeLink.classList.remove('active-page')
    featuredLink.classList.remove('active-page')
    recommendedLink.classList.remove('active-page')

    homeWrapper.style.display = 'none';

    shopWrapper.style.display = 'grid'
    shopWrapper.replaceChildren(renderItems('all', 18))
    shopLink.classList.add('active-page');
})

homeLink.addEventListener('click', () => {
    if (homeLink.classList.contains('active-page')) return;
    shopLink.classList.remove('active-page')
    featuredLink.classList.remove('active-page')
    recommendedLink.classList.remove('active-page')

    shopWrapper.style.display = 'none';

    homeWrapper.style.display = 'block'
    homeLink.classList.add('active-page');
})