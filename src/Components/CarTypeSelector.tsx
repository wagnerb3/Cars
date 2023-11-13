interface Props {
    manufacturer: string;
    backPageButtonHandler: () => void;
}

function CarTypeSelector({ manufacturer, backPageButtonHandler }: Props) {
    return (
        <div>
            <h1>{manufacturer} Selected</h1>
            <div>
                <form onSubmit={backPageButtonHandler}>
                    <button type='submit'>
                        Back
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CarTypeSelector