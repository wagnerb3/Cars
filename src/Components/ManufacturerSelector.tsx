import { useState } from "react"
import CarLogos from "../ImageHelper";

interface Props {
    onSubmitButtonHandler: (manufacturer: string) => void;
}

function ManufacturerSelector({ onSubmitButtonHandler: onSubmitButton }: Props) {
    const Manufacturers = [
        "Acura",
        "Alfa Romeo",
        "Aston Martin",
        "Audi",
        "BMW",
        "Bentley",
        "Bugatti",
        "Buick",
        "Cadillac",
        "Chevrolet",
        "Chrysler",
        "DeLorean",
        "Dodge",
        "Ferrari",
        "Fiat",
        "Ford",
        "GMC",
        "Genesis",
        "Honda",
        "Hummer",
        "Hyundai",
        "Infiniti",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Lincoln",
        "Lotus",
        "Maserati",
        "Mazda",
        "McLaren",
        "Mercedes",
        "Mercury",
        "Mini",
        "Mitsubishi",
        "Nissan",
        "Oldsmobile",
        "Polestar",
        "Pontiac",
        "Porsche",
        "Ram",
        "Rivian",
        "Rolls-Royce",
        "Saab",
        "Saturn",
        "Scion",
        "Smart",
        "Subaru",
        "Suzuki",
        "Tesla",
        "Toyota",
        "Volkswagen",
        "Volvo"
    ];

    let options = Manufacturers.map((manufacturer, index) => (<option key={index} value={manufacturer}>{manufacturer}</option>));
    options.unshift(<option key={-1} value={"Please Select A Manufacturer"}>{"Please Select A Manufacturer"}</option>);

    const [selectedManufacturer, setSelectedManufacturer] = useState("Please Select A Manufacturer");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const car = event.target.value;
        setSelectedManufacturer(car);
    }

    const handleButton = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(`Selected ${selectedManufacturer}`);
        onSubmitButton(selectedManufacturer);
    }


    return (
        <div>
            <header className="Cars-header" />
            <select className="form-select" aria-label="Select A Car Manufacturer" onChange={handleChange}>
                {options}
            </select>
            {selectedManufacturer !== "Please Select A Manufacturer" &&
                <div>
                    <img src={CarLogos[selectedManufacturer]} alt={selectedManufacturer} height={200} />
                    <form onSubmit={handleButton}>
                        <button type='submit'>
                            Select {selectedManufacturer}
                        </button>
                    </form>
                </div>}
        </div>
    )

}

export default ManufacturerSelector