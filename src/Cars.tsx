import React from 'react';
import Select from 'react-select'

class Cars extends React.Component<{}, { make: string, image: string }>{

    constructor(props: { image: string }) {
        super(props);
        this.state = {
            make: "",
            image: ""
        };
    }
    cars = [
        { make: "Acura", image: "https://1000logos.net/wp-content/uploads/2018/09/Acura-Logo.png" },
        { make: "Alfa Romeo", image: "https://medias.fcacanada.ca//specs/alfaromeo/media/images/badge//current-badge_457d965994803bd415fc9735d023d1eb.png" },
        { make: "Aston Martin", image: "https://1000logos.net/wp-content/uploads/2020/02/Aston-Martin-Logo.png" },
        { make: "Audi", image: "https://i.pinimg.com/originals/a6/1f/36/a61f36fab622f8b33f207295b766ca1b.png" },
        { make: "BMW", image: "https://cdn.freebiesupply.com/logos/large/2x/bmw-logo-png-transparent.png" },
        { make: "Bentley", image: "https://pngimg.com/d/bentley_PNG43.png" },
        { make: "Bugatti", image: "https://brandslogos.com/wp-content/uploads/images/large/bugatti-logo.png" },
        { make: "Buick", image: "https://assets.stickpng.com/images/5ec3e43d58550c000442774a.png" },
        { make: "Cadillac", image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c473.png" },
        { make: "Chevrolet", image: "https://1000logos.net/wp-content/uploads/2019/12/Chevrolet-Logo-2010.png" },
        { make: "Chrysler", image: "https://autoworksoftampa.com/wp-content/uploads/2022/06/7-1024x576.png" },
        { make: "DeLorean", image: "https://www.carlogos.org/logo/DMC-logo-1440x900.png" },
        { make: "Dodge", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Dodge_black_logo.svg/1024px-Dodge_black_logo.svg.png" },
        { make: "Ferrari", image: "https://assets.stickpng.com/images/580b585b2edbce24c47b2c52.png" },
        { make: "Fiat", image: "https://cdn.freebiesupply.com/logos/large/2x/fiat-3-logo-png-transparent.png" },
        { make: "Ford", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png" },
        { make: "GMC", image: "https://1000logos.net/wp-content/uploads/2023/03/GMC-Logo.png" },
        { make: "Genesis", image: "https://1000logos.net/wp-content/uploads/2019/10/Genesis-Logo-2015.png" },
        { make: "Honda", image: "https://freepngimg.com/save/36643-honda-logo/1156x942" },
        { make: "Hummer", image: "https://1000logos.net/wp-content/uploads/2020/06/Hummer-Logo-1992.png" },
        { make: "Hyundai", image: "https://assets.stickpng.com/images/5ec3e3d458550c0004427747.png" },
        { make: "Infiniti", image: "https://pngimg.com/d/car_logo_PNG1646.png" },
        { make: "Jaguar", image: "https://assets.stickpng.com/images/5ec3e38658550c0004427745.png" },
        { make: "Jeep", image: "https://assets.stickpng.com/images/6128f860e3a15c00041a8e3c.png" },
        { make: "Kia", image: "https://i2.wp.com/www.securenigeria365.com/wp-content/uploads/2021/01/unnamed.png?fit=29151069&ssl=1" },
        { make: "Lamborghini", image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c48c.png" },
        { make: "Land Rover", image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c48a.png" },
        { make: "Lexus", image: "https://assets.stickpng.com/images/5ec3e36558550c0004427744.png" },
        { make: "Lincoln", image: "https://www.pngall.com/wp-content/uploads/13/Lincoln-Motor-Company-Logo-PNG-Picture.png" },
        { make: "Lotus", image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c48d.png" },
        { make: "Maserati", image: "https://freepngimg.com/save/24485-maserati-logo-photos/3000x3000" },
        { make: "Mazda", image: "https://pngimg.com/d/mazda_PNG86.png" },
        { make: "McLaren", image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c492.png" },
        { make: "Mercedes", image: "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-9-logo-png-transparent.png" },
        { make: "Mercury", image: "https://clipart-library.com/new_gallery/10-102555_mercury-car-brand-logo.png" },
        { make: "Mini", image: "https://pngimg.com/d/mini_PNG11789.png" },
        { make: "Mitsubishi", image: "https://cdn.freebiesupply.com/logos/large/2x/mitsubishi-logo-png-transparent.png" },
        { make: "Nissan", image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png" },
        { make: "Oldsmobile", image: "https://www.carlogos.org/logo/Oldsmobile-symbol-1996-1920x1080.png" },
        { make: "Polestar", image: "https://www.carlogos.org/logo/Polestar-logo-1366x768.png" },
        { make: "Pontiac", image: "https://www.carlogos.org/logo/Pontiac-symbol-640x1136.png" },
        { make: "Porsche", image: "https://assets.stickpng.com/images/580b585b2edbce24c47b2cac.png" },
        { make: "Ram", image: "https://cdn.freebiesupply.com/logos/large/2x/dodge-ram-logo-png-transparent.png" },
        { make: "Rivian", image: "https://companieslogo.com/img/orig/RIVN-6c24fd1f.png?t=1635961984" },
        { make: "Rolls-Royce", image: "https://www.carlogos.org/logo/Rolls-Royce-logo-2048x2048.png" },
        { make: "Saab", image: "https://cdn.freebiesupply.com/logos/large/2x/saab-2-logo-png-transparent.png" },
        { make: "Saturn", image: "https://cdn.freebiesupply.com/logos/large/2x/saturn-5-logo-png-transparent.png" },
        { make: "Scion", image: "https://www.carlogos.org/logo/Scion-logo-2003-1920x1080.png" },
        { make: "Smart", image: "https://www.carlogos.org/logo/Smart-symbol-1994-2048x2048.png" },
        { make: "Subaru", image: "https://assets.stickpng.com/images/580b585b2edbce24c47b2cbf.png" },
        { make: "Suzuki", image: "https://1000logos.net/wp-content/uploads/2021/04/Suzuki-logo.png" },
        { make: "Tesla", image: "https://assets.stickpng.com/images/5ec40989195c530004f93f05.png" },
        { make: "Toyota", image: "https://1000logos.net/wp-content/uploads/2021/04/Toyota-logo.png" },
        { make: "Volkswagen", image: "https://cdn.freebiesupply.com/logos/large/2x/volkswagen-3-logo-png-transparent.png" },
        { make: "Volvo", image: "https://pngimg.com/d/volvo_PNG64.png" }
    ]



    createOptions = () => {
        let options: { value: number, label: string }[] = [];
        for (let i = 0; i < this.cars.length; i++) {
            options.push({ value: i, label: this.cars[i].make })
        }
        return options
    }


    options = this.createOptions();


    handleChange = (selectedOption: any) => {
        this.setState({ make: selectedOption.value, image: this.cars[selectedOption.value].image });
        console.log(selectedOption);
    };

    render(): React.ReactNode {
        return (
            <div className="Cars" >
                <header className="Cars-header">
                </header>
                <Select options={this.options} onChange={this.handleChange} />
                <img src={this.state.image} height={200}></img>
            </div>
        )
    }
}

export default Cars