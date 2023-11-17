import AcuraImage from './Images/Logos/Acura.png';
import AlfaRomeoImage from './Images/Logos/AlfaRomeo.png';
import AstonMartinImage from './Images/Logos/AstonMartin.png';
import AudiImage from './Images/Logos/Audi.png';
import BentleyImage from './Images/Logos/Bentley.png';
import BMWImage from './Images/Logos/BMW.png';
import BugattiImage from './Images/Logos/Bugatti.png';
import BuickImage from './Images/Logos/Buick.png';
import CadillacImage from './Images/Logos/Cadillac.png';
import ChevroletImage from './Images/Logos/Chevrolet.png';
import ChryslerImage from './Images/Logos/Chrysler.png';
import DodgeImage from './Images/Logos/Dodge.png';
import FerrariImage from './Images/Logos/Ferrari.png';
import FiatImage from './Images/Logos/Fiat.png';
import FordImage from './Images/Logos/Ford.png';
import GenesisImage from './Images/Logos/Genesis.png';
import GMCImage from './Images/Logos/GMC.png';
import HondaImage from './Images/Logos/Honda.png';
import HummerImage from './Images/Logos/Hummer.png';
import HyundaiImage from './Images/Logos/Hyundai.png';
import InfinitiImage from './Images/Logos/Infiniti.png';
import JaguarImage from './Images/Logos/Jaguar.png';
import JeepImage from './Images/Logos/Jeep.png';
import KiaImage from './Images/Logos/Kia.png';
import LamborghiniImage from './Images/Logos/Lamborghini.png';
import LandRoverImage from './Images/Logos/LandRover.png';
import LexusImage from './Images/Logos/Lexus.png';
import LincolnImage from './Images/Logos/Lincoln.png';
import LotusImage from './Images/Logos/Lotus.png';
import MaseratiImage from './Images/Logos/Maserati.png';
import MazdaImage from './Images/Logos/Mazda.png';
import McLarenImage from './Images/Logos/McLaren.png';
import MercedesImage from './Images/Logos/Mercedes.png';
import MercuryImage from './Images/Logos/Mercury.png';
import MiniImage from './Images/Logos/Mini.png';
import MitsubishiImage from './Images/Logos/Mitsubishi.png';
import NissanImage from './Images/Logos/Nissan.png';
import OldsmobileImage from './Images/Logos/Oldsmobile.png';
import PolestarImage from './Images/Logos/Polestar.png';
import PontiacImage from './Images/Logos/Pontiac.png';
import PorscheImage from './Images/Logos/Porsche.png';
import RamImage from './Images/Logos/Ram.png';
import RivianImage from './Images/Logos/Rivian.png';
import RollsRoyceImage from './Images/Logos/RollsRoyce.png';
import SaabImage from './Images/Logos/Saab.png';
import SaturnImage from './Images/Logos/Saturn.png';
import ScionImage from './Images/Logos/Scion.png';
import SmartImage from './Images/Logos/Smart.png';
import SubaruImage from './Images/Logos/Subaru.png';
import SuzukiImage from './Images/Logos/Suzuki.png';
import TeslaImage from './Images/Logos/Tesla.png';
import ToyotaImage from './Images/Logos/Toyota.png';
import VolkswagenImage from './Images/Logos/Volkswagen.png';
import VolvoImage from './Images/Logos/Volvo.png';

export enum CarType {
    NotSet = 'NotSet',
    Sedan = 'Sedan',
    SUV = 'SUV',
    Minivan = 'Minivan',
    Van = 'Van',
    Truck = 'Truck'
}

export interface Model {
    name: string,
    type: CarType,
    image: string
}

export interface Car {
    make: string;
    image: string;
    types: CarType[];
    models: Model[];
}

export const BaseOption: Car = {
    make: "Please Select A Manufacturer",
    image: "",
    types: [],
    models: []
}

export const Makes: [{ make: string, image: string, types: CarType[], models: Model[] }] = [
    {
        make: "Acura",
        image: AcuraImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Integra",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "TLX",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "MDX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "RDX",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Alfa Romeo",
        image: AlfaRomeoImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Giulia",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Stelvio",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Tonale",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Aston Martin",
        image: AstonMartinImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "DB12",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "DBS",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Valhalla",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Valkyrie",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Valour",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Vantage",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "DBX",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Audi",
        image: AudiImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "A3",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "A4",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "A5",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "A6",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "A7",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "A8",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "TT",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "R8",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Q3",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Q4",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Q5",
                type: CarType.SUV,
                image: ""
            },
        ]
    },
    {
        make: "BMW",
        image: BentleyImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "2",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "3",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "4",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "5",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "7",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "8",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "M3",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "M8",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "i4",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "i5",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "i7",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "X1",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "X2",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "X3",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "X4",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "X5",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "X6",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "X7",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "iX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XM",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Bentley",
        image: BMWImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Continental GT Range",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Flying Spur Range",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Mulliner",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Bentayga Range",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Bugatti",
        image: BugattiImage,
        types: [CarType.Sedan],
        models: [
            {
                name: "Bolide",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Centodieci",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Chiron",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Divo",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Mistral",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Veyron",
                type: CarType.Sedan,
                image: ""
            }
        ]
    },
    {
        make: "Buick",
        image: BuickImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Enclave",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Encore GX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Envision",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Envista",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Cadillac",
        image: CadillacImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "CT4",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "CT5",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Escalade",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Lyriq",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XT4",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XT5",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XT6",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Chevrolet",
        image: ChevroletImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Truck],
        models: [
            {
                name: "Malibu",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Blazer",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Bolt",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Equinox",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Suburban",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Tahoe",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Trailblazer",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Traverse",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Trax",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Colorado",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Silverado",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Chrysler",
        image: ChryslerImage,
        types: [CarType.Sedan, CarType.Minivan],
        models: [
            {
                name: "300",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Pacifica",
                type: CarType.Minivan,
                image: ""
            }
        ]
    },
    {
        make: "Dodge",
        image: DodgeImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Challenger",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Charger",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Durango",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Hornet",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Ferrari",
        image: FerrariImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Daytona SP3",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Enzo",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "F40",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "F50",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GTO",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "LaFerrari",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Monza",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Portofino M",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Roma",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "SF90",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "296",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "812",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Purosangue",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Fiat",
        image: FiatImage,
        types: [CarType.Sedan],
        models: [
            {
                name: "500X",
                type: CarType.Sedan,
                image: ""
            }
        ]
    },
    {
        make: "Ford",
        image: FordImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Van, CarType.Truck],
        models: [
            {
                name: "Mustang",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Bronco",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Edge",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Expedition",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Explorer",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Escape",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Mustang Mach-E",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Transit",
                type: CarType.Van,
                image: ""
            },
            {
                name: "F-150",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "F-250",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "F-350",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "F-450",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Maverick",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Ranger",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Genesis",
        image: GenesisImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: ""
                type: CarType.Sedan,
                image: ""
            }
        ]
    },
    { make: "GMC", image: GMCImage, types: [CarType.Sedan, CarType.SUV, CarType.Truck], models: [] },
    { make: "Honda", image: HondaImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan, CarType.Truck], models: [] },
    { make: "Hummer", image: HummerImage, types: [CarType.SUV], models: [] },
    { make: "Hyundai", image: HyundaiImage, types: [CarType.Sedan, CarType.SUV, CarType.Truck], models: [] },
    { make: "Infiniti", image: InfinitiImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Jaguar", image: JaguarImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Jeep", image: JeepImage, types: [CarType.SUV, CarType.Truck], models: [] },
    { make: "Kia", image: KiaImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan], models: [] },
    { make: "Lamborghini", image: LamborghiniImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Land Rover", image: LandRoverImage, types: [CarType.SUV], models: [] },
    { make: "Lexus", image: LexusImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Lincoln", image: LincolnImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Lotus", image: LotusImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Maserati", image: MaseratiImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Mazda", image: MazdaImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "McLaren", image: McLarenImage, types: [CarType.Sedan], models: [] },
    { make: "Mercedes", image: MercedesImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Mercury", image: MercuryImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan], models: [] },
    { make: "Mini", image: MiniImage, types: [CarType.Sedan], models: [] },
    { make: "Mitsubishi", image: MitsubishiImage, types: [CarType.Sedan, CarType.SUV, CarType.Truck], models: [] },
    { make: "Nissan", image: NissanImage, types: [CarType.Sedan, CarType.SUV, CarType.Truck], models: [] },
    { make: "Oldsmobile", image: OldsmobileImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan], models: [] },
    { make: "Polestar", image: PolestarImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Pontiac", image: PontiacImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan], models: [] },
    { make: "Porsche", image: PorscheImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Ram", image: RamImage, types: [CarType.Truck], models: [] },
    { make: "Rivian", image: RivianImage, types: [CarType.SUV, CarType.Truck], models: [] },
    { make: "Rolls-Royce", image: RollsRoyceImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Saab", image: SaabImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Saturn", image: SaturnImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan], models: [] },
    { make: "Scion", image: ScionImage, types: [CarType.Sedan], models: [] },
    { make: "Smart", image: SmartImage, types: [CarType.Sedan], models: [] },
    { make: "Subaru", image: SubaruImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Suzuki", image: SuzukiImage, types: [CarType.Sedan, CarType.SUV, CarType.Truck], models: [] },
    { make: "Tesla", image: TeslaImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Toyota", image: ToyotaImage, types: [CarType.Sedan, CarType.SUV, CarType.Minivan, CarType.Truck], models: [] },
    { make: "Volkswagen", image: VolkswagenImage, types: [CarType.Sedan, CarType.SUV], models: [] },
    { make: "Volvo", image: VolvoImage, types: [CarType.Sedan, CarType.SUV], models: [] }
];