const GenderCheckbox = ({onCheckboxChange, selectedToGender}) => {
    return (
        <div className="flex">
            <div className="from-control">
                <label className={`label gap-2 cursor-pointer ${selectedToGender === "male"? "selected" : " "}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" 
                    checked={selectedToGender === "male"}
                    onChange={() => onCheckboxChange("male")}/>
                </label>
            </div>
            <div className="from-control">
                <label className={`label gap-2 cursor-pointer ${selectedToGender === "female"? "selected" : " "}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900"
                    checked={selectedToGender === "female"}
                    onChange={() => onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox