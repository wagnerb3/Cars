import { useState } from "react";
import MakeSelector from "./MakeSelector"
import CarTypeSelector from "./CarTypeSelector";
import { BaseOption, Car, CarType } from "../CarHelper";
import CarModelSelector from "./CarModelsSelector";

function CarProcess() {

    const [currentPage, setPage] = useState(0);
    const [selectedMake, setSelectedMake] = useState(BaseOption);
    const [selectedType, setSelectedType] = useState(CarType.NotSet);

    const goToCarTypePage = (manufacturer: Car) => {
        setPage(1);
        setSelectedMake(manufacturer);
    }

    const goToModelsPage = (carType: CarType) => {
        setPage(2);
        setSelectedType(carType)
    }

    const goToHomePage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPage(0);
    }

    const goToSelectTypePage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setPage(1);
    }

    return (
        <div>
            {currentPage === 0 && <MakeSelector make={selectedMake} onSubmitButtonHandler={goToCarTypePage} />}
            {currentPage === 1 && <CarTypeSelector make={selectedMake} selectCarTypeButtonHandler={goToModelsPage} backPageButtonHandler={goToHomePage} />}
            {currentPage === 2 && <CarModelSelector carType={selectedType} backPageButtonHandler={goToSelectTypePage}/>}
        </div>
    )
}

export default CarProcess