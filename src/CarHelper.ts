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
import MercedesImage from './Images/Logos/Mercedes.png';
import MiniImage from './Images/Logos/Mini.png';
import MitsubishiImage from './Images/Logos/Mitsubishi.png';
import NissanImage from './Images/Logos/Nissan.png';
import PolestarImage from './Images/Logos/Polestar.png';
import PorscheImage from './Images/Logos/Porsche.png';
import RamImage from './Images/Logos/Ram.png';
import RivianImage from './Images/Logos/Rivian.png';
import RollsRoyceImage from './Images/Logos/RollsRoyce.png';
import SubaruImage from './Images/Logos/Subaru.png';
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
                name: "G70",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "G80",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "G90",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "G70",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "G80",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "G90",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "GMC",
        image: GMCImage,
        types: [CarType.SUV, CarType.Van, CarType.Truck],
        models: [
            {
                name: "Acadia",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Hummer EV SUV",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Terrain",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Yukon",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Savana",
                type: CarType.Van,
                image: ""
            },
            {
                name: "Canyon",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Hummer EV Pickup",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Sierra 1500",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Sierra HD",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Honda",
        image: HondaImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Minivan, CarType.Truck],
        models: [
            {
                name: "Accord",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Civic",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "HR-V",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "CR-V",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Passport",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Pilot",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Odyssey",
                type: CarType.Minivan,
                image: ""
            },
            {
                name: "Ridgeline",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Hyundai",
        image: HyundaiImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Truck],
        models: [
            {
                name: "Elantra",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Ioniq 6",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Sonata",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Ioniq 5",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Kona",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Nexo Fuel Cell",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Palisade",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Santa Cruz",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Tucson",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Venue",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Santa Fe",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Infiniti",
        image: InfinitiImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Q50",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Q60",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "QX50",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "QX55",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "QX60",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "QX80",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Jaguar",
        image: JaguarImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "F-Type",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "XF",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "E-Pace",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "F-Pace",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "I-Pace",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Jeep",
        image: JeepImage,
        types: [CarType.SUV, CarType.Truck],
        models: [
            {
                name: "Cherokee",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Compass",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Grand Cherokee",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Grand Wagoneer",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Renegade",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Wagoneer",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Wrangler",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Gladiator",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Kia",
        image: KiaImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Forte",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "K5",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Rio",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Stinger",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Carnival MPV",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "EV9",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Niro",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Seltos",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Sorento",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Soul",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Sportage",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Telluride",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Lamborghini",
        image: LamborghiniImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Countach LPI 800-4",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Huracan",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Revuelto",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Sian",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Urus",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Land Rover",
        image: LandRoverImage,
        types: [CarType.SUV],
        models: [
            {
                name: "Defender",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Discovery",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Range Rover",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Lexus",
        image: LexusImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "ES",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "IS",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "LS",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "LC",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "RC",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "LX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "NX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "RX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "RZ",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "TX",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "UX",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Lincoln",
        image: LincolnImage,
        types: [CarType.SUV],
        models: [
            {
                name: "Aviator",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Corsair",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Nautilus",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Navigator",
                type: CarType.SUV,
                image: ""
            },
        ]
    },
    {
        make: "Lotus",
        image: LotusImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Emeya",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Emira",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Evija",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Eletre",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Maserati",
        image: MaseratiImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Ghibli",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GranTurismo",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "MC20",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Quattroporte",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Grecale",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Levante",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Mazda",
        image: MazdaImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Mazda 3",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "MX-5 Miata",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "CX-5",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "CX-30",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "CX-50",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "CX-90",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Mercedes",
        image: MercedesImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "A-Class",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "C-Class",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "CLA",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "CLE",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "CLS",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "E-Class",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "EQE",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "EQS",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GT",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Haute Voiture",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "S-Class",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "SL Roadster",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "EQB",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "EQE",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "EQS",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "G-Class",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "GLA",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "GLB",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "GLC",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "GLE",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Mini",
        image: MiniImage,
        types: [CarType.Sedan],
        models: [
            {
                name: "Clubman",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Convertible",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Countryman",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Hardtop",
                type: CarType.Sedan,
                image: ""
            }
        ]
    },
    {
        make: "Mitsubishi",
        image: MitsubishiImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Mirage",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Eclipse Cross",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Outlander",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Nissan",
        image: NissanImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Truck],
        models: [
            {
                name: "Altima",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GT-R",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Leaf",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Maxima",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Sentra",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Versa",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Z",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Ariya",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Armada",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Kicks",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Murano",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Pathfinder",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Rogue",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Frontier",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Titan",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Polestar",
        image: PolestarImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "2",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "3",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Porsche",
        image: PorscheImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "718",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "911",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Panamera",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Taycan",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Cayenne",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Macan",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Ram",
        image: RamImage,
        types: [CarType.Truck],
        models: [
            {
                name: "1500",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "2500",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "3500",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Rivian",
        image: RivianImage,
        types: [CarType.SUV, CarType.Truck],
        models: [
            {
                name: "R1S",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "R1T",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Rolls-Royce",
        image: RollsRoyceImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Black Badge",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Ghost",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Phantom",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Spectre",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Cullinan",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Subaru",
        image: SubaruImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "BRZ",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Impreza",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Legacy",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "WRX",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Ascent",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Crosstrek",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Forester",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Outback",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Solterra",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Tesla",
        image: TeslaImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "Model S",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Model 3",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Model X",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Model Y",
                type: CarType.SUV,
                image: ""
            }
        ]
    },
    {
        make: "Toyota",
        image: ToyotaImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Minivan, CarType.Truck],
        models: [
            {
                name: "Camry",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Corolla",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Crown",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GR Supra",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "GR86",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Mirai",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Prius",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "bZ4X Cross",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Corolla Cross",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Highlander",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "RAV4",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Sequoia",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Venza",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "4Runner",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Sienna",
                type: CarType.Minivan,
                image: ""
            },
            {
                name: "Tacoma",
                type: CarType.Truck,
                image: ""
            },
            {
                name: "Tundra",
                type: CarType.Truck,
                image: ""
            }
        ]
    },
    {
        make: "Volkswagen",
        image: VolkswagenImage,
        types: [CarType.Sedan, CarType.SUV, CarType.Minivan],
        models: [
            {
                name: "Arteon",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Golf",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "ID.7",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Jetta",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "Atlas",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "ID.4",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Taos",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "Tiguan",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "ID.Buzz",
                type: CarType.Minivan,
                image: ""
            }
        ]
    },
    {
        make: "Volvo",
        image: VolvoImage,
        types: [CarType.Sedan, CarType.SUV],
        models: [
            {
                name: "S60",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "S90",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "V60",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "V90",
                type: CarType.Sedan,
                image: ""
            },
            {
                name: "C40",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "EX30",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "EX90",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XC40",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XC60",
                type: CarType.SUV,
                image: ""
            },
            {
                name: "XC90",
                type: CarType.SUV,
                image: ""
            }
        ]
    }
];