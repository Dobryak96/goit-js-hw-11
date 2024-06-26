export function getImages(search) {
    const searchParams = new URLSearchParams({
    key: '44625430-53c6836fb724f6d850fb95d06',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '24',
    safesearch: false,
    });

    const url = `https://pixabay.com/api/?${searchParams}`;
    
    return fetch(url).then(res => res.json());
}