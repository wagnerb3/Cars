import { useState } from "react"
import { Car, Makes } from "../CarHelper";

interface Props {
    make: Car
    onSubmitButtonHandler: (car: Car) => void;
}

function MakeSelector({ make, onSubmitButtonHandler }: Props) {


    let options = Makes.map((make, index) => (<option key={index} value={make.make}>{make.make}</option>));
    options.unshift(<option key={-1} value={"Please Select A Manufacturer"}>{"Please Select A Manufacturer"}</option>);

    const [selectedMake, setSelectedMake] = useState(make)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const car = Makes.filter(x => x.make === event.target.value)[0];
        setSelectedMake(car);
    }

    const handleButton = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Selected ${selectedMake.make}`);
        onSubmitButtonHandler(selectedMake);
    }


    return (
        <div>
            <header className="Cars-header" />
            <select className="form-select" aria-label="Select A Car Manufacturer" onChange={handleChange}>
                {options}
            </select>
            {selectedMake.make !== "Please Select A Manufacturer" &&
                <div>
                    <img src={selectedMake.image} alt={selectedMake.make} height={200} />
                    <form onSubmit={handleButton}>
                        <button type='submit'>
                            Select {selectedMake.make}
                        </button>
                    </form>
                </div>}
        </div>
    )

}

export default MakeSelector