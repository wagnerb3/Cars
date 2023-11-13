import { useState } from "react";
import ManufacturerSelector from "./ManufacturerSelector"
import CarTypeSelector from "./CarTypeSelector";

function CarProcess() {

    const [currentPage, setPage] = useState(0);
    const [selectedManufacturer, setSelectedManufacturer] = useState("");

    const goToCarTypePage = (manufacturer: string) => {
        setPage(1);
        setSelectedManufacturer(manufacturer);
    }

    const resetToHome = () => {
        setPage(0);
        setSelectedManufacturer("");
    }

    return (
        <div>
            {currentPage === 0 && <ManufacturerSelector onSubmitButtonHandler={goToCarTypePage}></ManufacturerSelector>}
            {currentPage === 1 && <CarTypeSelector manufacturer={selectedManufacturer} backPageButtonHandler={resetToHome}></CarTypeSelector>}
        </div>
    )
}

export default CarProcess