import {useState} from 'react';
import Select from 'react-select'

function Cars() {    
    const cars = {
        "Acura": "https://1000logos.net/wp-content/uploads/2018/09/Acura-Logo.png",
        "Alfa Romeo": "https://medias.fcacanada.ca//specs/alfaromeo/media/images/badge//current-badge_457d965994803bd415fc9735d023d1eb.png",
        "Aston Martin": "https://1000logos.net/wp-content/uploads/2020/02/Aston-Martin-Logo.png",
        "Audi": "https://i.pinimg.com/originals/a6/1f/36/a61f36fab622f8b33f207295b766ca1b.png",
        "BMW": "https://cdn.freebiesupply.com/logos/large/2x/bmw-logo-png-transparent.png",
        "Bentley": "https://pngimg.com/d/bentley_PNG43.png",
        "Bugatti": "https://cdn.freebiesupply.com/logos/large/2x/bugatti-2-logo-png-transparent.png",
        "Buick": "https://assets.stickpng.com/images/5ec3e43d58550c000442774a.png",
        "Cadillac": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c473.png",
        "Chevrolet": "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-Logo-2010.png",
        "Chrysler": "https://autoworksoftampa.com/wp-content/uploads/2022/06/7-1024x576.png",
        "DeLorean": "https://www.carlogos.org/logo/DMC-logo-1440x900.png",
        "Dodge": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dodge_black_logo.svg/1024px-Dodge_black_logo.svg.png",
        "Ferrari": "https://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png",
        "Fiat": "https://cdn.freebiesupply.com/logos/large/2x/fiat-3-logo-png-transparent.png",
        "Ford": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
        "GMC": "https://1000logos.net/wp-content/uploads/2023/03/GMC-Logo.png",
        "Genesis": "https://1000logos.net/wp-content/uploads/2019/10/Genesis-Logo-2015.png",
        "Honda": "https://freepngimg.com/save/36643-honda-logo/1156x942",
        "Hummer": "https://1000logos.net/wp-content/uploads/2020/06/Hummer-Logo-1992.png",
        "Hyundai": "https://assets.stickpng.com/images/5ec3e3d458550c0004427747.png",
        "Infiniti": "https://pngimg.com/d/car_logo_PNG1646.png",
        "Jaguar": "https://assets.stickpng.com/images/5ec3e38658550c0004427745.png",
        "Jeep": "https://assets.stickpng.com/images/6128f860e3a15c00041a8e3c.png",
        "Kia": "https://assets.stickpng.com/images/638e307b3eae41f3706b4076.png",
        "Lamborghini": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c48c.png",
        "Land Rover": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c48a.png",
        "Lexus": "https://assets.stickpng.com/images/5ec3e36558550c0004427744.png",
        "Lincoln": "https://www.pngall.com/wp-content/uploads/13/Lincoln-Motor-Company-Logo-PNG-Picture.png",
        "Lotus": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c48d.png",
        "Maserati": "https://freepngimg.com/save/24485-maserati-logo-photos/3000x3000",
        "Mazda": "https://pngimg.com/d/mazda_PNG86.png",
        "McLaren": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c492.png",
        "Mercedes": "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png",
        "Mercury": "https://clipart-library.com/new_gallery/10-102555_mercury-car-brand-logo.png",
        "Mini": "https://pngimg.com/d/mini_PNG11789.png",
        "Mitsubishi": "https://cdn.freebiesupply.com/logos/large/2x/mitsubishi-logo-png-transparent.png",
        "Nissan": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png",
        "Oldsmobile": "https://www.carlogos.org/logo/Oldsmobile-symbol-1996-1920x1080.png",
        "Polestar": "https://www.carlogos.org/logo/Polestar-logo-1366x768.png",
        "Pontiac": "https://www.carlogos.org/logo/Pontiac-symbol-640x1136.png",
        "Porsche": "https://assets.stickpng.com/images/580b585b2edbce24c47b2cac.png",
        "Ram": "https://cdn.freebiesupply.com/logos/large/2x/dodge-ram-logo-png-transparent.png",
        "Rivian": "https://companieslogo.com/img/orig/RIVN-6c24fd1f.png?t=1635961984",
        "Rolls-Royce": "https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png",
        "Saab": "https://cdn.freebiesupply.com/logos/large/2x/saab-2-logo-png-transparent.png",
        "Saturn": "https://cdn.freebiesupply.com/logos/large/2x/saturn-5-logo-png-transparent.png",
        "Scion": "https://www.carlogos.org/logo/Scion-logo-2003-1920x1080.png",
        "Smart": "https://www.carlogos.org/logo/Smart-symbol-1994-2048x2048.png",
        "Subaru": "https://assets.stickpng.com/images/580b585b2edbce24c47b2cbf.png",
        "Suzuki": "https://1000logos.net/wp-content/uploads/2021/04/Suzuki-logo.png",
        "Tesla": "https://assets.stickpng.com/images/5ec40989195c530004f93f05.png",
        "Toyota": "https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png",
        "Volkswagen": "https://cdn.freebiesupply.com/logos/large/2x/volkswagen-3-logo-png-transparent.png",
        "Volvo": "https://pngimg.com/d/volvo_PNG64.png"
    }
    
    const [selected, setSelected] = useState(null);
    let image = ""

    const handleChange = (selectedOption: any) => {
      setSelected(selectedOption);
      console.log(`Option selected:`, selectedOption);
    };

    const options = Object.keys(cars).map(m => ({value: m, label: m}));
    return (
        <div className="Cars">
            <header className="Cars-header">
            </header>
            <Select options={options} onChange={handleChange}/>
            <img src={image}></img>
        </div>
    );
}

export default Cars;
