import drivers_icon from "./imgs/drivers.png";
import health_insurance_icon from "./imgs/health_insurance.png";
import nannies_icon from "./imgs/nannies.png";
import photo_icon from "./imgs/photo.png";

export const ICON_TYPES = [
    {
        id: 3,
        name: "motoristas",
        icon: drivers_icon,
        color: '#8AC7E7'
    },
    {
        id: 4,
        name: "fotógrafos",
        icon: photo_icon,
        color: '#C5A04D'
    },
    {
        id: 5,
        name: "babás",
        icon: nannies_icon,
        color: '#DD2025'
    },
    {
        id: 6,
        name: `assistência 
    médica`,
        icon: health_insurance_icon,
        color: '#081869'
    },
];

export const getFooterColor = (check) => {
    let slug;
    switch (check) {
        case 'aventura':
            slug = '#538CAE';
            break;
        case 'exotico':
            slug = '#EF955D';
            break;
        case 'neve':
            slug = '#B9D4E1';
            break;
        case 'parque':
            slug = '#F15C42';
            break;
        case 'praia':
            slug = '#FDB72E';
            break;
        case 'resort':
            slug = '#F9B5B3';
            break;
        case 'urbano':
            slug = '#C37CB3';
            break;
        case 'viagem':
            slug = '#80CAA7';
            break;
        default:
            slug = '#000'
            break;
    }
    return slug
};